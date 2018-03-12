import React, { Component } from 'react';
import CriterionCkeckbox from 'components/criterion-checkbox';
import './criterion-basket.scss';
import './popup-criteria.scss';


class CriterionBasket extends Component {
    
    constructor(props) {
	super(props);

	this.state = {
	    criteriaGroups: [],
	    selected: []
	};

    }
    
    

    render() {

    
	return [

	    <div key="1"  className="criterion-basket">
		<div className="criterion-group">

		</div>
		<For each="criterion" index="index" of={this.props.criteria}>
		    <CriterionCkeckbox 
			size={32}
			key={index} 
			active={criterion.active}
			onClick={()=>this.props.onClick(criterion.id)}
			criterion={criterion} />
		</For>

	    </div>,
	    <div key="2" className="criterion-footer">
		<div className="button" onClick={this.props.onComplete}>Выбрать</div>
	    </div>
	
	];
    }

};

export default CriterionBasket;
    
    {/*		<For each="criteriaGroup" index="index" of={this.state.criteriaGroups}>
		    <div key={index} className="criterion-group">
			<div className="criterion-group__header">{criteriaGroup.label}</div>
			<For each="criterion" index="_index" of={criteriaGroup.criteria}>
			    <CriterionCkeckbox 
				size={32}
				key={_index} 
				active={false}
				onClick={this.add}
				criterion={criterion} />
			</For>
		    </div>
		</For>*/}