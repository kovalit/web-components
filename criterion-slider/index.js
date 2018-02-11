import React, { Component } from 'react';
import './bar_criterion.scss';
import './bar.scss';

class CriterionSlider extends Component {
    
    constructor(props) {
	super(props);
    }
    
    render() {
	return (
	    <div className="bar bar_criterion">
		<div className="value" style={{width: "77%", backgroundColor: "rgb(230, 113, 89)"}}></div>
		<div className="slider" style={{left: "77%"}}></div>
		<span className="bar_item start-label"></span>
		<span className="bar_item center"></span>
		<span className="bar_item end-label"></span>
	    </div>
	);
    }

};

export default CriterionSlider;


