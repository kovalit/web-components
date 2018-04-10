import React, { Component, PropTypes } from 'react';
import ToolbarIcon from './toolbar-icon';


class SideToolbar extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    isExpanded: false
	};
	document.body.addEventListener("click", ()=> {
	    this.setState({isExpanded: false});
	});
    }
  
  
  render() {
    const { isExpanded } = this.state;
    
    const { editorState, onScore, onTop, onToggle } = this.props;
    
    return (
	<div style={this.props.style} className="side-toolbar">
	    <i className="fas fa-star"
	       onMouseDown={e => e.preventDefault()}
	       onClick={onScore}>
	    </i>
	    <i className="fas fa-list-ol"
	       onMouseDown={e => e.preventDefault()}
	       onClick={onTop}>
	    </i>
	</div>
    )
  }
}

export default SideToolbar;
