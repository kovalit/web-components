import React, { Component } from 'react';
import CriterionCkeckbox from 'components/criterion-checkbox';
import './criterion-basket.scss';

class CriterionBasket extends Component {
    
    constructor(props) {
	super(props);
	this.node = null;

	this.state = {
	    criteriaGroups: [],
	    selected: []
	};
	
	this.add = this.add.bind(this);
    }
    
    componentDidMount() {
	fetch('http://whatsbetter.me/api/spheres/@hpda/criteriagroups')  
	    .then(res=>res.json())
	    .then(body=>{
		this.setState({criteriaGroups: body.data})
	    })
    }
    
    add(criterion, active) {
	let selected = this.state.selected.slice();
	if (!active) {
	   selected.push(criterion); 
	}
	
	this.setState({
	    selected: selected
	});
    }

    render() {
	return (
	    <div className="criterion-basket">
		<div className="criterion-group">
		    <For each="criterion" index="index" of={this.state.selected}>
			<CriterionCkeckbox 
			    size={32}
			    key={index} 
			    active={true}
			    onClick={this.add}
			    criterion={criterion} />
		    </For>
		</div>
		<For each="criteriaGroup" index="index" of={this.state.criteriaGroups}>
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
		</For>  
	    </div>
	);
    }

};

export default CriterionBasket;