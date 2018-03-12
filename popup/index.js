import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './popup.scss';


class Popup extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    show: this.props.show || true
	};
	document.body.style.overflow = "hidden";
	
	this.close = this.close.bind(this);
	this.innerClick = this.innerClick.bind(this);
    }
    
    close() {
	document.body.style.overflow = "inherit";
	let el = ReactDOM.findDOMNode(this).parentNode;
	ReactDOM.unmountComponentAtNode(el);
    }
    
    innerClick(e) {
	e.stopPropagation();
    }

    render() {
	const classNames = [];
	const name = ("name" in this.props) ? this.props.name : "default";

	classNames.push('popup');
	classNames.push('popup-' + name);

	return (
	    <div ref="popup" className={classNames.join(' ')} onMouseUp={this.close}>	
		<div onMouseUp={this.innerClick} className="popup-window inner-scroll">
		    <div onClick={this.close} className="popup-close"></div>
		    {this.props.children}
		</div>
	    </div>
	);
    }

};

export default Popup;