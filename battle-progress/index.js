import React, { Component } from 'react';
import helpers from 'helpers';
import './battle-progress.scss';



const BattleProgress = (props) => {
    let left = props.left / (props.right + props.left) * 100
    let right = 100 - left;

    
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