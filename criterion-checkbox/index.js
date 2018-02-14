import React, { Component } from 'react';
import './criterion-checkbox.scss';

class CriterionCheckbox extends Component {
    
    constructor(props) {
	super(props);
	this.node = null;

	this.state = {
	    active: false,
	};
    }

    
    render() {
	return (
	    <div className="criterion selected" style={{backgroundColor: 'rgb(90, 191, 192)'}}>Игра актеров</div>
	);
    }

};

export default CriterionCheckbox;