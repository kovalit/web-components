import React, { Component } from 'react';
import './criteria-list.scss';

import CriterionCheckbox from 'components/criterion-checkbox';


class CriteriaList extends Component {   
	
    constructor(props) {
	super(props);
	
	this.state = {
	    criteria: this.props.criteria.slice()
	};
	
	this.onSave = this.onSave.bind(this);
    }
    
    onSelect(id) {
	let criteria = this.state.criteria;
	for (let criterion of criteria) {
	    if (criterion.id === id)  {
		criterion.active = !criterion.active;
	    }
	}
	
	this.setState({criteria: criteria})
    }
    
    onSave() {
	let criteria = this.state.criteria.filter(item => item.active);
	this.props.onSave(criteria);
	this.props.close("criteria-list")
    }
	
    render() {

	
	return (
	    <div className="criteria-popup inner-scroll visible">
		<div className="criteria-content">
		    <div className="criterion-list">
			<For each="criterion" index="index" of={ this.state.criteria }>
			    <CriterionCheckbox 
				key={index}
				onClick={()=>this.onSelect(criterion.id)}
				color={criterion.color} 
				active={criterion.active} 
				criterion={criterion} />
			</For>
		    </div>

		</div>
		<div className="popup-close" onClick={()=>this.props.close("criteria-list")}></div>
		<div className="criteria-list-footer">
		    <div onClick={this.onSave} className="criteria-list-apply">Применить</div>
		</div>
	    </div>
	);
    }
};

export default CriteriaList;