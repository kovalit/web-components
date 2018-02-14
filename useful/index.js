import React from 'react';
import './useful.scss';


const Useful = () => {
return (
	<div className="useful">
	    <div className="useful-button useful-button_minus" data-userful="False">
		<span className="useful-button__icon">–</span>
		<span className="useful-button__counter">0</span>
	    </div>
	    <div className="useful-button useful-button_plus" data-userful="True">
		<span className="useful-button__icon">+</span>
		<span className="useful-button__counter">2</span>
	    </div>
	</div>
    );
};

export default Useful;


