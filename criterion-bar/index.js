import React, { Component } from 'react';
import helpers from 'helpers';
import rand from 'random-seed';
if (typeof window !== 'undefined') require('./criterion-bar.scss');



const CriterionBar = ({id, title, score}) => {
    let progress = 0;
    let gen = rand.create(id);
    let index = gen(24);
    let color = helpers.color(index);

    if(score === null){
	progress = 0;
    }    
    else if (score >= 0) {
	progress = 50 + 34 * score;
    }
    else {
	progress = 50 + 48 * score;
    }
    
    let style = {
	backgroundColor: color,
	width: progress + "%"
    };
    
    return (
	<div className="criterion-bar">
	    <div className="criterion-bar__progress" style={style}></div>
	    <div className="criterion-bar__score">
		{score !== null ? (score * 5).toFixed(1) : "-.-"}
	    </div>
	</div>
    );
};

export default CriterionBar;