import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './popup.scss';


class Popup extends Component {
    
    constructor(props) {
	super(props);

	this.innerClick = this.innerClick.bind(this);
    }
    
    
    innerClick(e) {
	e.stopPropagation();
    }

    render() {	
	if (!this.props.visible) {
	    return null;
	}

	const classNames = [];
	const name = ("name" in this.props) ? this.props.name : "default";

	classNames.push('popup');
	classNames.push('popup-' + name);

	return (
	    <div className={classNames.join(' ')} onMouseUp={()=>this.props.close(this.props.name)}>	
		<div onMouseUp={this.innerClick} className="popup-window inner-scroll">
		    <div onClick={()=>this.props.close(this.props.name)} className="popup-close"></div>
		    {this.props.children}
		</div>
	    </div>
	);
    }

};

export default Popup;