import React, { Component } from 'react';
import './bar_criterion.scss';
import './bar.scss';

class CriterionSlider extends Component {
    
    constructor(props) {
	super(props);
	this.node = null;

	this.state = {
	    //isEditable: false,
	    pos: null,
	    value: ("defaultValue" in this.props) ? this.props.defaultValue : 0,
	    progress: ("defaultValue" in this.props) ? 50 * (1 + this.props.defaultValue)  : 0
	};
	this.ref = this.ref.bind(this);
	this.handleMouseMove = this.handleMouseMove.bind(this);
	this.handleMouseUp = this.handleMouseUp.bind(this);
	
    }
    
    componentWillUnmount() {
	this.removeDocumentMouseMoveListener();
	this.removeDocumentMouseUpListener();
    }
    
    getStylesClass() {
	let names = ["bar", "bar_criterion"];
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
	let ev = {};
	if (this.props.editable){
	    ev.onMouseDown = this.handleMouseDown.bind(this);
	}
	let {criterion, color, scalegrid} = this.props;
	
	return (
	    <div 
		{...ev}
		ref={this.ref}
		className={this.getStylesClass()}  >
		
		<div className="value" style={{width: this.state.progress + "%" , backgroundColor: color}}></div>
		<div className="slider" style={{left: this.state.progress + "%" }}></div>
		<span className={`bar_item ${scalegrid ? "bar_scale" : ""} start-label`}>{criterion.label}</span>
		<span className={`bar_item ${scalegrid ? "bar_scale" : ""} center`}></span>
		<span className={`bar_item ${scalegrid ? "bar_scale" : ""} end-label`}>
		    {(this.state.value * 5).toFixed(1)}
		</span>
	    </div>
	);
    }

};

export default CriterionSlider;