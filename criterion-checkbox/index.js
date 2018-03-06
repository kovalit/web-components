import React, { Component } from 'react';

if (typeof window !== 'undefined') {
    require('./criterion-checkbox.scss');
}

import helpers from 'helpers';
import rand from 'random-seed';

class CriterionCheckbox extends Component {
    
    constructor(props) {
	super(props);
	
	this.size = this.props.size || 24;
	let gen = rand.create(this.props.criterion.id);
	let index = gen(24);

	this.state = {
	    active: this.props.active || false,
	    clickable: this.props.clickable || true,
	    color : helpers.color(index),
	};
	this.onClick = this.onClick.bind(this);
    }


    onClick() {
	let active = this.state.active;
	this.setState({
	    active: !active
	});
	
	this.props.onClick(this.props.criterion, active);
    }
    
    render() {
	
	let style = {};
	let classNames = ["criterion", "criterion" + this.size];
	
	if (this.state.active) {
	    style.backgroundColor = this.state.color;
	    classNames.push("selected");
	}
	
	return (
	    <div className={classNames.join(" ")} 
		onClick={this.onClick}
		style={style} >
		{this.props.criterion.label}
	    </div>
	);
    }

};

export default CriterionCheckbox;