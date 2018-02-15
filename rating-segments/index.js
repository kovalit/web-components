import React, { Component } from 'react';
import './segments.scss';


class RatingSegments extends Component {
    
    constructor(props) {
	super(props);

	this.state = {
	    type: "all"
	};
	
	this.openUsersList = this.openUsersList.bind(this);
    }
    
    
    openUsersList(e) {
	e.stopPropagation();
    }
    
    
    setType(type){
	this.setState({
	    type: type
	});
    }

    render() {
	
	return (
	    <div className="segments">
		<div className="segments__title">По мнению:</div>
		<div onClick={()=>this.setType("all")} 
		    className={`segments__item ${this.state.type === "all" ? "active" : ""}`}>
		    <div className="label">Все</div>
		</div>
		<div onClick={()=>this.setType("friends")} 
		    className={`segments__item ${this.state.type === "friends" ? "active" : ""}`}>
		    <div className="label">Друзья</div>
		    <div onClick={this.openUsersList} className="dropdown"></div>
		</div>
		<div onClick={()=>this.setType("experts")} 
		    className={`segments__item ${this.state.type === "experts" ? "active" : ""}`}>
		    <div className="label">Эксперты</div>
		    <div onClick={this.openUsersList}  className="dropdown"></div>
		</div>
		<div onClick={()=>this.setType("me")} 
		    className={`segments__item ${this.state.type === "me" ? "active" : ""}`}>
		    <div className="label">Я</div>
		</div>
	    </div>
	);
    }
};

export default RatingSegments;