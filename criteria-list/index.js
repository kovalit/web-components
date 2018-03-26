import React, { Component } from 'react';
import './criteria-list.scss';

import CriterionCheckbox from 'components/criterion-checkbox';

const CriteriaList = (props) => { 
    return (
	<div className="criteria-popup inner-scroll visible">
	    <div className="criteria-content">
		<div className="criterion-list">
		    <For each="criterion" index="index" of={ props.criteria }>
			<CriterionCheckbox 
			    color={criterion.color} 
			    active={criterion.active} 
			    criterion={criterion} />
		    </For>
		</div>

	    </div>
	    <div class="popup-close" onClick={()=>props.close("criteria-list")}></div>
	    
	</div>
    );
};

export default CriteriaList;