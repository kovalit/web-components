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
	    selSphere: null,
	    selCriterion: null,
	    selEntity: null,
	    value: null,
	};
	
	this.selectSphere = this.selectSphere.bind(this);
	this.selectCriterion = this.selectCriterion.bind(this);
	this.selectEntity = this.selectEntity.bind(this);
	this.onSave = this.onSave.bind(this);
    }
    
    componentDidMount() {
	request(api.spheres.findAll)
	    .then(body => {
		this.setState({spheres: body.spheres})
	    });
    }
    
    selectSphere(e) {
	let {options, selectedIndex, value} = e.target;
   
	let sphere = {
	    id: value,
	    label: options[selectedIndex].innerHTML 
	};

	request(api.criteria.findAll, {sphereId: sphere.id})
	    .then(body => {
		this.setState({
		    selSphere: sphere,
		    criteria: body.criteria
		});
	    });
    }
    
    selectCriterion(e) {
	let {options, selectedIndex, value} = e.target;
	
	let criterion = {
	    id: value,
	    label: options[selectedIndex].innerHTML 
	};
	
	request(api.entities.findAll, {sphereId: this.state.selSphere.id, criteria: criterion.id})
	    .then(body => {
		this.setState({
		    selCriterion: criterion,
		    entities: body.entities
		});
	    });
    }
    
    selectEntity(e) {
	let {options, selectedIndex, value} = e.target;
	
	let entity = {
	    id: value,
	    label: options[selectedIndex].innerHTML,
	    mainImage: null
	};
    
	this.setState({
	    selEntity: entity,
	});
	    
    }
    
    onSave() {
	
	let {selSphere, selCriterion, selEntity, value} = this.state;
	
	let data = {
	    sphere: selSphere,
	    criterion: selCriterion,
	    entity: selEntity,
	    value: value
	};
	
	this.props.onSave(data);
    }
    

    render() {
	return (
	    <div>
		<h4>Добавьте оценку</h4>
		
		<div>
		    <label>Выберите сферу</label><br/>
		    <select onChange={this.selectSphere} name="spheres">
			<For each="sphere" index="index" of={this.state.spheres }>
			    <option key={index} value={sphere.id}>{sphere.label}</option>    
			</For>
		    </select>
		</div>
		
		<div>
		    <label>Выберите критерий</label><br/>
		    <select onChange={this.selectCriterion} name="criterion">
			<For  each="criterion" index="index" of={this.state.criteria }>
			    <option key={index} value={criterion.id}>{criterion.label}</option>    
			</For>
		    </select>
		</div>
		
		<div>
		    <label>Выберите объект</label><br/>
		    <select onChange={this.selectEntity} name="entities">
			<For each="entity" index="index" of={this.state.entities }>
			    <option key={index} value={entity.id}>{entity.label}</option>    
			</For>
		    </select>
		</div>
		
		<div>
		    <label>Оценка</label><br/>
		    <input type="text" onChange={(e) => this.setState({value: e.target.value})} />
		</div>
		
		<div>
		    <button onClick={this.onSave}>Добавить</button>
		</div>
		
		
	    </div>
	);
    }
};

export default AttachScore;
