import React, { Component } from 'react';

import Score from '../score';


class ScoreEdit extends Component {
    
    constructor(props) {
	super(props);
	this.node = null;

	this.state = {
	    //isEditable: false,
	    pos: null,
	    value: ("value" in this.props) ? this.props.value : 0,
	    progress: this.getProgress()
	};
	this.ref = this.ref.bind(this);
	
	this.handleMouseDown = this.handleMouseDown.bind(this);
	this.handleMouseMove = this.handleMouseMove.bind(this);
	this.handleMouseUp = this.handleMouseUp.bind(this);

    }
    
    getProgress() {
	let val = 0;
	if  ("value" in this.props) {
	    val = 50 * (1 + parseFloat(this.props.value))
	}
	return val;
    }
    
    componentWillUnmount() {
	this.removeDocumentMouseMoveListener();
	this.removeDocumentMouseUpListener();
    }
    
    
    getStylesClass() {
	let names = ["score", "score_32"];
	if (this.props.editable) {
	    names.push("bar_editable");
	}
	
	return names.join(" ");
    }
    
   

    addDocumentMouseMoveListener() {
	this.removeDocumentMouseMoveListener();
	this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }


    addDocumentMouseUpListener() {
	this.removeDocumentMouseUpListener();
	this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }


    removeDocumentMouseMoveListener() {
	this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }


    removeDocumentMouseUpListener() {
	this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }


    handleMouseDown() {

	this.setState({
	    pos: this.node.getBoundingClientRect()
	});
    
	this.addDocumentMouseMoveListener();
	this.addDocumentMouseUpListener();
    }


    handleMouseUp() {
	this.removeDocumentMouseMoveListener();
	this.removeDocumentMouseUpListener();
    }


    handleMouseMove(event) {
	let x =  event.screenX - this.state.pos.x;
	if (x < 0) {
	    x = 0;
	}
	else if (x > this.state.pos.width) {
	    x = this.state.pos.width;
	}
	
	
//	if (x < 32) {
//	    return;
//	}
//	if (x > this.state.pos.width - 32) {
//	    return;
//	}
//	
	
	let progress = x / this.state.pos.width * 100;

	
	
	
	let value = (2 * x - this.state.pos.width) / this.state.pos.width;
	value = value.toFixed(2);
	
	this.setState({
	    progress: progress,
	    value: value
	});
	
	this.props.onChange(value);
    }

    
    ref(node){
	this.node = node;
    }
    
    
    render() {
	
	return (
	    <div className="score-edit">
    
		<div className="score-slider" 
		    style={{height: this.props.size || 32}} 
		    ref={(node) => this.node = node} 
		    onMouseDown={this.handleMouseDown}
		>
		    <div className="score-slider__bublle" style={{left: this.state.progress + "%" }}></div>
		</div>
   
		<Score {...this.props} value={this.state.value} />
			
	    </div>
	);
    }
};

export default ScoreEdit;
    
    {/*
 * 
 * 
 * <div className="score__scale" data-min="-5.0" data-max="5.0">0</div>
		<div className="score__value" style={{width: this.state.progress + "%" , backgroundColor: color}}></div>
		<div className="score-slider" style={{left: this.state.progress + "%" }}></div>
		<span className="score__label score__label_name">{criterion.label}</span>
		<span className="score__delimiter"></span>
		<span className="score__label score__label_value">
		    {(this.state.value * 5).toFixed(1)}
		</span>
     */}