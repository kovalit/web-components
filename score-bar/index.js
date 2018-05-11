import React, { Component } from 'react';
import helpers from 'helpers';
import rand from 'random-seed';

const ScoreBar = (props) => {
    let progress = 0;
    
    let gen = rand.create(props.criterion.id);
    let index = gen(24);
    let color = helpers.color(index);

    if(props.value === null){
	progress = 0;
    }    
    else if (props.value >= 0) {
	progress = 50 + 34 * props.value;
    }
    else {
	progress = 50 + 48 * props.value;
    }
    
    let style = {
	backgroundColor: color,
	width: progress + "%"
    };
    
    
    return (	
	<div className={`bar bar${props.size} bar_criterion`}>
	    <div className="value" style={style}></div>
	    <span className="bar_item bar_scale start-label">{props.criterion.label}</span>
	    <span className="bar_item bar_scale center"></span>
	    <span className="bar_item bar_scale end-label">{(props.value * 5).toFixed(1)}</span>
	</div>
    );
};

export default ScoreBar;