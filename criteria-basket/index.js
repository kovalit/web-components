import React, { Component } from 'react';
import './criteria-basket.scss';

import CriterionCheckbox from 'components/criterion-checkbox';

const CriteriaBasket = (props) => { 
    if (!props.visible) {
	return null;
    }
    
    return (
	<div className="criteria-basket" onClick={props.onClick}>
	    <div className="criteria-basket-title">Критерии:</div>
	    <div className="criteria-basket-main">
		<For each="criterion" index="index" of={ props.criteria }>
		    <CriterionCheckbox 
			key={index} 
			color={criterion.color} 
			active={true} 
			criterion={criterion} />
		</For>
	    </div>
	    <div className="criteria-select"></div>
	</div>
    );
};

export default CriteriaBasket;