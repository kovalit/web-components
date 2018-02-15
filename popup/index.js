import React, { Component } from 'react';
import './popup.scss';

class Popup extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    show: true
	};
	
	this.close = this.close.bind(this);
	
    }
    
    close() {
	this.setState({
	    show: !this.state.show
	});
    }

    render() {
	if (!this.state.show) {
	    return null;
	}
	
	const classNames = [];
	const name = ("name" in this.props) ? this.props.name : "default";

	classNames.push('popup');
	classNames.push('popup-' + name);

	if ("close" in this.props) {
	    classNames.push('popup-' + this.props.close);
	}

	return (
	    <div className={classNames.join(' ')} onMouseUp={this.close}>	
		<div className="popup-window inner-scroll">
		    <div className="close icons_close-round"></div>
		    {this.props.children}
		</div>
	    </div>
	);
    }

};

export default Popup;