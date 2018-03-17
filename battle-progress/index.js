import React, { Component } from 'react';
import helpers from 'helpers';
import './battle-progress.scss';



const BattleProgress = (props) => {
    let left;
    let right;
    
    if (props.right === 0 && props.left === 0 ) {
	left = right = 50;
    }
    else {
	left = props.left / (props.right + props.left) * 100;
	right = 100 - left;
    }
    

    
    let styleLeft = {
	width: left + "%"
    };
    
      let styleRight = {
	width: right + "%"
    };


    
    return (
	<div className="battle-progress">
	    <div className="bar bar_left">
		<div className="bar__progress" style={styleLeft}></div>
		<div className="bar__score">{left}%</div>
	    </div>
	    <div className="bar bar_right">
		<div className="bar__progress" style={styleRight}></div>
		<div className="bar__score">{right}%</div>
	    </div>
	</div>
    );
};

export default BattleProgress;