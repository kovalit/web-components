import React, { Component } from 'react';
import helpers from 'helpers';
import rand from 'random-seed';
import './criterion-bar.scss';



const CriterionBar = (props) => {
    let progress = 0;
    
    let gen = rand.create(props.id);
    let index = gen(24);
    let color = helpers.color(index);

    if(props.score === null){
	progress = 0;
    }    
    else if (props.score >= 0) {
	progress = 50 + 34 * props.score;
    }
    else {
	progress = 50 + 48 * props.score;
    }
    
    let style = {
	backgroundColor: color,
	width: progress + "%"
    };
    
    let size = props.size || 12;
    
    let css = ["criterion-bar", "bar" + size];
    if (props.inverse) {
	css.push("inverse");
    }
    
    return (
	<div className={css.join(" ")}>
	    <div className="criterion-bar__progress" style={style}></div>
	    <div className="criterion-bar__score">
		{props.score !== null ? (props.score * 5).toFixed(1) : "-.-"}
	    </div>
	</div>
    );
};

export default CriterionBar;