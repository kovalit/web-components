import React from 'react';
import './useful.scss';


const Useful = (props) => {
    return (
	<div className="useful">
	    <div className="useful-button useful-button_minus" data-userful="False">
		<span className="useful-button__icon">–</span>
		<span className="useful-button__counter">{props.minus}</span>
	    </div>
	    <div className="useful-button useful-button_plus" data-userful="True">
		<span className="useful-button__icon">+</span>
		<span className="useful-button__counter">{props.plus}</span>
	    </div>
	</div>
    );
};

export default Useful;


