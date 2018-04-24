import React from 'react';
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

export default (props) => {
    const { editorState, onToggle, position } = props;
    const currentStyle = editorState.getCurrentInlineStyle();
    
    const selection = editorState.getSelection();
    const blockType = editorState.getCurrentContent()
			    .getBlockForKey(selection.getStartKey())
			    .getType();
    
    return (
	<div
	    className="toolbar"
	    id="inlineToolbar"
	    style={position}>
	    
	    <ul className="toolbar-icons">
		<For each="type" index="index" of={ INLINE_STYLES  }>
		    <ToolbarIcon
			key={type.label || type.icon}
			active={currentStyle.has(type.style)}
			label={type.label}
			icon={type.name}
			onToggle={props.toggleInlineStyle}
			style={type.style}/>
		</For>

		<For each="type" index="index" of={ BLOCK_TYPES }>
		    <ToolbarIcon
		      key={type.label || type.icon}
		      active={type.style === blockType}
		      label={type.label}
		      icon={type.icon}
		      onToggle={props.toggleBlockType}
		      style={type.style} />
		</For>
	    </ul>
	</div>
  )
};
