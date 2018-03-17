import React, { Component } from 'react';
import helpers from 'helpers';
import rand from 'random-seed';

import Useful from 'components/useful';

import './comment.scss';
import './avatars.scss';
import './score.scss';


class Comment extends Component {
    
    constructor(props) {
	super(props);
	
	let gen = rand.create(this.props.criterion.id);
	let index = gen(24);

	this.state = {
	    fullText: false,
	    text: this.props.comment ? this.props.comment.text : "",
	    color: helpers.color(index)
	};
	
	

    }
    
    componentWillUnmount() {
	
    }

    
    getPreamble(text){
	let limit = 200;
	
	if (text.length <= limit || this.state.fullText) {
	    return text;
	}
	
	let visibleText = text.slice(0, limit);
	let hiddenText = text.slice(limit);

	if (hiddenText.charAt(0) !== ' ') {
	    let index = visibleText.lastIndexOf(' ');
	    visibleText = text.slice(0, index);
	    hiddenText = text.slice(index);
	}

	return [
		<span key="1">{visibleText}</span>,
		<span key="2" style={{display: "inlile-block"}}> ... </span>,
		<span key="3"
		    onClick={()=>this.setState({fullText: true})} 
		    className="comment-text-more">
		    Читать далее
		</span>,
		<span key="4" style={{display: "none"}}>{hiddenText}</span>
	];
    }
    
    render() {
	
	const {user, comment, useful, score} = this.props;
	
	return (
	    <div className="comment">
		
		<div className="comment-header">
		    <div className="comment-avatar">
			<div className="avatar32" style={helpers.imgStyle(user.main_image_hash, "64-64")}></div>
		    </div>

		    <div className="comment-username">
			<div className="username">{user.label}</div>
			<div className="userinfo">Карма: {helpers.carma(user)}</div>
		    </div>
		    
		    <If condition={score}>
			<div className="comment-score">
			    <div className="score" style={{backgroundColor: this.state.color}}>{score}</div>
			</div>
		    </If>
		</div>
		
		<If condition={this.props.object}>
		    <div className="comment-object">
			<div className="comment-object__img" style={helpers.imgStyle(this.props.object.main_image_hash, "64-64")}></div>
			<div className="comment-object__label">{this.props.object.label}</div>
		    </div>
		</If>
		
		<If condition={comment}>
			
		    <div className="comment-content">
			{this.getPreamble(this.state.text)}
		    </div>

		    <div className="comment-date">{helpers.dateFormat(comment.created)}</div>

		    <div className="comment-footer">
			<div className="comment-button comment-reply">Ответить</div>
			<Useful {...useful} />
			<div className="comment-sharing">Поделиться</div>
		    </div>
		</If>
		
	    </div>
	);
    }

};

export default Comment;