import React, { Component } from 'react';
import ToolbarIcon from './toolbar-icon';
import './inline-toolbar.scss';

import classnames from 'classnames';

const INLINE_STYLES = [
    { icon: 'a-bold', style: 'BOLD', name: "fas fa-bold" },
    { icon: 'a-italic', style: 'ITALIC', name: "fas fa-italic" },
    { icon: 'a-underline', style: 'UNDERLINE', name: "fas fa-underline"}
];

const BLOCK_TYPES = [
    { style: 'header-two',  label: 'H2'},
    { style: 'header-three', label: 'H3'},
    { style: 'blockquote', icon: 'fas fa-quote-right'},
    { style: 'unordered-list-item', icon: 'fas fa-list-ul'},
];


class InlineToolbar extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    showURLInput: false,
	    link: ''
	};
	
	this.setLink = this.setLink.bind(this);
	this.addLink = this.addLink.bind(this);
	this.showLink = this.showLink.bind(this);
	this.closeLink = this.closeLink.bind(this);
    }
    
    showLink() {
	this.setState({
		showURLInput: true
	    }, 
	    () => this.linkInput.focus()
	);
    }
    
    closeLink() {
	this.setState({showURLInput: false});
    }
    
    
    addLink() {
	this.props.confirmLink(this.state.link);
    }
    
    setLink(e) {

	this.setState({link: e.target.value})
    }
	
    render() {
	const { editorState, onToggle, position } = this.props;
	const currentStyle = editorState.getCurrentInlineStyle();

	const selection = editorState.getSelection();
	const blockType = editorState.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();
	
	
    
	return (
	    <div className="post-editor-toolbar pet" style={position}>
		
		<If condition={this.state.showURLInput}>
		    <div className="pet-link">
			<input className="pet-link__input" 
			    type="text" 
			    placeholder="Введите ссылку"
			    ref={(input) => { this.linkInput = input; }}  
			    value={this.state.link} 
			    onChange={this.setLink} />
			<div className="pet-link-btn pet-link__add" onClick={this.addLink}>
			    <i class="fas fa-check-circle"></i>
			</div>
			<div className="pet-link-btn pet-link__remove" onClick={this.closeLink}>		
			    <i className="fas fa-times-circle"></i>	
			</div>
		    </div>
		<Else />
		
		    <div className="pet-icons">
			<For each="type" index="index" of={ INLINE_STYLES  }>				
			    <ToolbarIcon
				key={type.label || type.icon}
				active={currentStyle.has(type.style)}
				label={type.label}
				icon={type.name}
				onToggle={this.props.toggleInlineStyle}
				style={type.style}/>
			</For>

			<div className="pet-icons__item" onClick={this.showLink}>	
			    <i className="fas fa-link"></i>
			</div>

			<For each="type" index="index" of={ BLOCK_TYPES }>
			    <ToolbarIcon
			      key={type.label || type.icon}
			      active={type.style === blockType}
			      label={type.label}
			      icon={type.icon}
			      onToggle={this.props.toggleBlockType}
			      style={type.style} />
			</For>
		    </div>
		    
		</If>

		
	    </div>
	)
    }
    
};

export default InlineToolbar;
