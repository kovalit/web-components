import React, { Component, PropTypes } from 'react';
import './side-toolbar.scss';

// modules
import classnames from 'classnames';

// components
import ToolbarIcon from './toolbar-icon';



class SideToolbar extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    isExpanded: false
	};
	
//	document.body.addEventListener("click", ()=> {
//	    this.setState({isExpanded: false});
//	});
	this.onExpand = this.onExpand.bind(this);
    }
  
    onExpand() {
	let isExpanded = this.state.isExpanded;
	this.setState({isExpanded: !isExpanded});
    }
    
    render() {
	const { isExpanded } = this.state;

	const { editorState, onScore, onTop, onToggle } = this.props;

	return (
	    <div style={this.props.style} className="post-editor-side-toolbar pest">
		<If condition={isExpanded}>
		    <div className="pest-list">
			<div className="pest-list__item" onMouseDown={e => e.preventDefault()}>
			    <i className="fas fa-camera"></i>
			    Фото
			</div>
			<div className="pest-list__item" onMouseDown={e => e.preventDefault()} onClick={onScore}>
			    <i className="fas fa-star"></i>
			    Оценка
			</div>
		    </div>
		    
		</If>
		<div className={"pest-add " + classnames({expand: isExpanded})} 
		    onMouseDown={e => e.preventDefault()}
		    onClick={this.onExpand} 
		    style={this.props.style}>
		    +
		</div>
	    </div>
	
    );
  }
}

export default SideToolbar;
