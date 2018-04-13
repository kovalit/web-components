import React, { Component } from 'react';
import './popup-attach.scss';

import api from 'api';
import request from 'request';


class AttachScore extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    spheres: [],
	    entities: [],
	    criteria: [],
	    sphereId: null,
	};
	
	this.selectSphere = this.selectSphere.bind(this)
	this.selectCriterion = this.selectCriterion.bind(this)
    }
    
    componentDidMount() {
	request(api.spheres.findAll)
	    .then(body => {
		this.setState({spheres: body.spheres})
	    });
    }
    
    selectSphere(val) {	
	let sphereId = val.target.value;
	request(api.criteria.findAll, {sphere: val.target.value})
	    .then(body => {
		this.setState({
		    sphereId: sphereId,
		    criteria: body.criteria
		})
	    });
    }
    
    selectCriterion(val) {
	request(api.entities.findAll, {sphereId: this.state.sphereId, criteria: val.target.value})
	    .then(body => {
		this.setState({
		    entities: body.entities
		});
	    });
    }
    

    render() {
	return (
	    <div>
		<h4>Добавьте оценку</h4>
		<select onChange={this.selectSphere} name="spheres">
		    <For each="sphere" index="index" of={this.state.spheres }>
			<option key={index} value={sphere.id}>{sphere.label}</option>    
		    </For>
		</select>
		
		<select onChange={this.selectCriterion} name="criterion">
		    <For  each="criterion" index="index" of={this.state.criteria }>
			<option key={index} value={criterion.id}>{criterion.label}</option>    
		    </For>
		</select>
		
		<select onChange={this.selectEntity} name="entities">
		    <For each="entity" index="index" of={this.state.entities }>
			<option key={index} value={entity.id}>{entity.label}</option>    
		    </For>
		</select>
	    </div>
	);
    }
};

export default AttachScore;
