import React from 'react';
import Type from 'prop-types';

const Useful = (props) => {
    return (
	<div className="useful">
	    <div className="useful-button useful-button_minus" onClick={()=>props.onClick("minus")}>
		<span className="useful-button__icon">–</span>
		<span className="useful-button__counter">{props.minus}</span>
	    </div>
	    <div className="useful-button useful-button_plus" onClick={()=>props.onClick("plus")}>
		<span className="useful-button__icon">+</span>
		<span className="useful-button__counter">{props.plus}</span>
	    </div>
	</div>
    );
};

Useful.propTypes = {
    minus: Type.number.isRequired,
    plus: Type.number.isRequired,
    onClick: Type.func.isRequired
};

export default Useful;


