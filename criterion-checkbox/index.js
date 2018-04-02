import React, { Component } from 'react';
import'./criterion-checkbox.scss';

import helpers from 'helpers';
import rand from 'random-seed';

class CriterionCheckbox extends Component {
    
    constructor(props) {
	super(props);
	
	this.size = this.props.size || 24;
	
	this.state = {
	    active: this.props.active || false,
	    clickable: this.props.clickable || true,
	};
	//this.onClick = this.onClick.bind(this);
    }


//    onClick() {
//	let active = this.props.active;	
//	this.props.onClick(this.props.criterion, active);
//    }
    
    render() {
	
	let style = {};

	let classNames = ["criterion", "criterion" + this.size];
	
	if (this.props.active) {
	    style.backgroundColor = this.props.color;
	    classNames.push("selected");
	}
	if (this.props.short) {
	    classNames.push("criterion_short");
	}
	
	if ("width" in this.props) {
	    style.width = this.props.width;
	}
	
	return (
	    <div className={classNames.join(" ")} 
		onClick={this.props.onClick}
		style={style} >
		{this.props.criterion.label}
	    </div>
	);
    }

};

export default CriterionCheckbox;