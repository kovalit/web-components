import React, { Component } from 'react';
import ToolbarIcon from './toolbar-icon';

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
    }
    
    showLink() {
	this.setState({
		showURLInput: true
	    }, 
	    () => this.linkInput.focus()
	);
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
	    <div className="toolbar" id="inlineToolbar" style={position}>
		
		<If condition={this.state.showURLInput}>
		    <div>
			<input type="text" 
			    ref={(input) => { this.linkInput = input; }}  
			    value={this.state.link} 
			    onChange={this.setLink} />
			<button onClick={this.addLink}>ok</button>
		    </div>
		<Else />
		
		    <ul className="toolbar-icons">
			<For each="type" index="index" of={ INLINE_STYLES  }>
			    <ToolbarIcon
				key={type.label || type.icon}
				active={currentStyle.has(type.style)}
				label={type.label}
				icon={type.name}
				onToggle={this.props.toggleInlineStyle}
				style={type.style}/>
			</For>

			<li className="toolbar-icon" onClick={this.showLink}>	
			    <i className="fas fa-link"></i>
			</li>

			<For each="type" index="index" of={ BLOCK_TYPES }>
			    <ToolbarIcon
			      key={type.label || type.icon}
			      active={type.style === blockType}
			      label={type.label}
			      icon={type.icon}
			      onToggle={this.props.toggleBlockType}
			      style={type.style} />
			</For>
		    </ul>
		    
		</If>

		
	    </div>
	)
    }
    
};

export default InlineToolbar;
