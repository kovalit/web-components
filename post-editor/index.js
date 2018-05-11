import React, { Component, PropTypes } from 'react';
import { Map } from 'immutable';
import {
    Editor,
    EditorState,
    Entity,
    RichUtils,
    ContentState,
    Modifier,
    CompositeDecorator,
    AtomicBlockUtils,
    DefaultDraftBlockRenderMap } from 'draft-js';

import {
  getSelectionRange,
  getSelectedBlockElement,
  getSelectionCoords } from './selection';
  
// Redux
import { connect } from 'react-redux';

  //modules
import api from 'api';
import request from 'request';

//components
import PostPublish from 'components/post-editor/publish';
import User from 'components/user';
import SideToolbar from './side-toolbar';
import InlineToolbar from './inline-toolbar';

import PostScore from 'components/posts/score';
import PostTop from 'components/posts/top';


import draftJsRead from './draft-js-read';
import draftJsSave from './draft-js-save';
import removeBlock from './remove-block';

// custom
const blockRenderMap = Map({
    'score': {
	element: 'score',
	editable: false,
    },
    'top': {
	element: 'top',
	editable: false,
    }
});

const extendedBlockRenderMap = DefaultDraftBlockRenderMap.merge(blockRenderMap);
    function findLinkEntities(contentBlock, callback, contentState) {
        contentBlock.findEntityRanges(
          (character) => {
            const entityKey = character.getEntity();
            return (
              entityKey !== null &&
              contentState.getEntity(entityKey).getType() === 'LINK'
            );
          },
          callback
        );
    }

    const Link = (props) => {
        const {url} = props.contentState.getEntity(props.entityKey).getData();
        return (
          <a href={url}>
            {props.children}
          </a>
        );
    };
      
const decorator = new CompositeDecorator([
      {
	  strategy: findLinkEntities,
	  component: Link,
      },
  ]);

class PostEditor extends Component {
    
    constructor(props) {
	super(props);
	
	
	
	this.state = { 
	    post: null,
	    isPublishDialog: false,
	    isNew: this.props.isNew || false,
	    scores: {},
	    editorState: EditorState.createEmpty(decorator),
	    inlineToolbar: { 
		show: false 
	    }
	};
    
	this.onChange = (editorState) => {
	    if (!editorState.getSelection().isCollapsed()) {
		const selectionRange = getSelectionRange();
		const selectionCoords = getSelectionCoords(selectionRange);
		this.setState({
		    inlineToolbar: {
		      show: true,
			position: {
			    top: selectionCoords.offsetTop,
			    left: selectionCoords.offsetLeft
			}
		    }
		});
	    } 
	    else {
		this.setState({ inlineToolbar: { show: false } });
	    }

	    
	    this.setState({ editorState });
	    setTimeout(this.updateSelection, 0);
	};
    
	this.save = this.save.bind(this);
	this.onPublish = this.onPublish.bind(this);
	this.onPublishShow = this.onPublishShow.bind(this);
	this.confirmLink = this.confirmLink.bind(this);
	
	
	//this.focus = () => this.refs.editor.focus();
	this.onTop = () => this._onTop();

	this.updateSelection = () => this._updateSelection();
	this.handleKeyCommand = (command) => this._handleKeyCommand(command);
	this.handleFileInput = (e) => this._handleFileInput(e);
	this.handleUploadImage = () => this._handleUploadImage();
	this.toggleBlockType = (type) => this._toggleBlockType(type);
	this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
	this.insertImage = (file) => this._insertImage(file);
	this.blockRenderer = (block) => {
	
	if (block.getType() === 'atomic') {
	    if (block.getLength() === 0) { 
		return ;
	    }

	    const entity = Entity.get(block.getEntityAt(0));
	    const data = entity.getData();
	    const type = entity.getType();

	    if (type === 'score') {
		let score;
		if (data.isNew) {		
		    score = data.payload; 
		    score.user = this.props.me;

		}
		else {
		    let scores = this.state.post.metadata.scores.filter(item=>item.id === data.id); 
		    if (scores.length === 0) {
			return null;
		    }
		    score = scores[0];
		}
	
		let _scores = this.state.scores;
		_scores[data.id] = true;
		
		this.setState({scores: _scores});
		return {
		    component: PostScore,
		    editable: false,
		    props: {
			id: data.id,
			score: score,
			onClick: (blockKey) => {
			    let newState = removeBlock(this.state.editorState, blockKey);
			    this.onChange(newState);
			}

		    }
		};
	    }
	    else if (type === 'top') {
		return {
		    component: PostTop,
		    editable: false,
		    props: {
			id: data.id,
			onClick: (blockKey) => {
			    let newState = removeBlock(this.state.editorState, blockKey);
			    this.onChange(newState);
			}
		    }
		};
	    }
	  }

	  return null;
	};
    
	this.blockStyler = (block) => {
	    if (block.getType() === 'unstyled') {
		return 'paragraph';
	    }
	    return null;
	};
    }
    
    componentDidMount() {   
	if (this.props.isNew) {
	    this.setState({
		post: {title: ""}
	    });
	    return;
	}

	console.log("id", this.props.id)
	request(api.posts.findByAlias, {id: this.props.id})
	    .then(body => {
		let html = draftJsRead(body.post.content);
	
		this.setState({
		    post: body.post,
		    editorState: EditorState.createWithContent(html, decorator),
		});
	    });
    }
  
    save() {
	let post = Object.assign({}, this.state.post);
	
	post.title = this.refs.title.innerHTML;
	post.content = draftJsSave(this.state.editorState.getCurrentContent());
	post.scores = Object.keys(this.state.scores).join(",");	

	if (this.state.isNew) {
	    request(api.posts.create, post)
		.then(body => {
		    
		    console.log(body)
		    this.setState({
			isNew: false,
			post: Object.assign({}, post, {id: body.createPost.id})
		    });
		});
	}
	else {
	    request(api.posts.update, post);
	}

  }

    _updateSelection() {
	const selectionRange = getSelectionRange();
	let selectedBlock;
	if (selectionRange) {
	    selectedBlock = getSelectedBlockElement(selectionRange);
	}
	this.setState({
	    selectedBlock,
	    selectionRange
	});
    }

    _handleKeyCommand(command) {
	  const { editorState } = this.state;
	  const newState = RichUtils.handleKeyCommand(editorState, command);
	  if (newState) {
	      this.onChange(newState);
	      return true;
	  }
	  return false;
    }

    _toggleBlockType(blockType) {
	this.onChange(
	    RichUtils.toggleBlockType(
		this.state.editorState,
		blockType
	    )
	);
    }

    _toggleInlineStyle(inlineStyle) {
	this.onChange(
	    RichUtils.toggleInlineStyle(
		this.state.editorState,
		inlineStyle
	    )
	);
    }

    _insertImage(file) {
	//const entityKey = Entity.create('atomic', 'IMMUTABLE', {src: URL.createObjectURL(file)});
	//this.onChange(AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey,' '));
    }
    
    confirmLink(urlValue) {
	const {editorState} = this.state;
	const contentState = editorState.getCurrentContent();
	const contentStateWithEntity = contentState.createEntity('LINK', 'IMMUTABLE', {url: 'http://www.zombo.com'});
	
	const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
	const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

	this.onChange(
	    RichUtils.toggleLink(
		newEditorState,
		newEditorState.getSelection(),
		entityKey
            )
	);
        
   
    }

    _handleFileInput(e) {
	const fileList = e.target.files;
	const file = fileList[0];
	this.insertImage(file);
    }
    
    componentWillReceiveProps(props){
	if("payload" in props.attachments) {
	    let payload = props.attachments.payload;
	    
	    let params = {
		value: parseFloat(payload.value),
		criteriaId: payload.criterion.id,
		sphereId: payload.sphere.id,
		entityId: payload.entity.id
	    };
	    
	    request(api.scores.save, params)
		.then(body => {
		    let componentData = {
			isNew: true,
			payload: payload, 
			id: body.createScore.id
		    };
		    
		    const entityKey = Entity.create('score', 'IMMUTABLE', componentData);	
		    this.onChange(AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey,' '));  
		});
	}
	
    }
    
    _onTop() {
	const entityKey = Entity.create('top', 'IMMUTABLE', {id: 34});	
	this.onChange(AtomicBlockUtils.insertAtomicBlock(this.state.editorState, entityKey,' '));
    }
    
    
    
    onPublishShow(e) {
	if (this.state.isPublishDialog) {
	    this.setState({isPublishDialog: false});
	    return;
	}
	
	e.stopPropagation();
	e.nativeEvent.stopImmediatePropagation();
	
	this.setState({isPublishDialog: true});
	
	document.addEventListener("click", () => {
	    this.setState({isPublishDialog: false});
	});
    }
    
    onPublish(data) {
	let post = this.state.post;
	this.setState({
	    post: Object.assign({}, post, data) 
	}, this.save);
    }

    render() {
	const { editorState, selectedBlock, selectionRange } = this.state;
	let sideToolbarOffsetTop = 0;

	if (selectedBlock) {
	    const editor = document.getElementById('richEditor');
	    const editorBounds = editor.getBoundingClientRect();
	    const blockBounds = selectedBlock.getBoundingClientRect();

	    sideToolbarOffsetTop = (blockBounds.bottom - editorBounds.top)- 31;
	}
	const {post} = this.state;
	
	if (!post) {
	    return null;
	}

	return (
	    <div className="post-wrapper">
		<div className="post-close" onClick={this.props.onClose}></div>
		<div className="post" id="richEditor" onClick={this.focus}>
		    <div className="post-header">
			<div className="float-left">
			    <User user={this.props.me} size={48} />
			</div>

			<div className="float-right"> 
			    <div className="post-btn" onClick={this.save}>Сохранить</div> 
			    <div className="post-btn" onClick={this.onPublishShow}>Опубликовать</div> 
			</div>
			<div className="clear-fix"> </div>

		    </div>

		    <If condition={this.state.isPublishDialog}>
			<PostPublish post={post} onPublish={this.onPublish} />
		    </If>

		    <If condition={selectedBlock}>
			<SideToolbar
			  editorState={editorState}
			  style={{ top: sideToolbarOffsetTop }}
			  onToggle={this.toggleBlockType}
			  onTop={this.onTop}
			  onScore={() => this.props.showPopup("attachScore")}/>
		    </If>

		    <If condition={this.state.inlineToolbar.show}>
		       <InlineToolbar
			    editorState={editorState}
			    confirmLink={this.confirmLink}
			    toggleInlineStyle={this.toggleInlineStyle}
			    toggleBlockType={this.toggleBlockType}
			    position={this.state.inlineToolbar.position} />

		    </If>
		    
		    <div ref="title"
			placeholder="Заголовок"
			contentEditable
			className="post-title"   
			dangerouslySetInnerHTML={{__html: post.title }} /> 

		    <Editor
			blockRendererFn={this.blockRenderer}
			blockStyleFn={this.blockStyler}
			editorState={editorState}
			blockRenderMap={extendedBlockRenderMap}
			handleKeyCommand={this.handleKeyCommand}
			onChange={this.onChange}
			placeholder="Напишите здесь что-нибудь"
			spellCheck={false}
			readOnly={this.state.editingImage}
			ref="editor" />


		    <input type="file" ref="fileInput" style={{display: 'none'}} onChange={this.handleFileInput} />
		</div>
	    </div>
	);
    }
}

export default PostEditor;
    
    
