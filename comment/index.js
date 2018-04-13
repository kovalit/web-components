import React, { Component } from 'react';
import helpers from 'helpers';

import Useful from 'components/useful';

import './comment.scss';
import './avatars.scss';
import './score.scss';


class Comment extends Component {
    
    constructor(props) {
	super(props);

	this.state = {
	    fullText: false,
	    text: this.props.comment ? this.props.comment.text : "",
	    isReply: false,
	    useful: this.props.useful
	};
	
	this.onReply = this.onReply.bind(this);
	this.onCloseReply = this.onCloseReply.bind(this);
	this.changeUseful = this.changeUseful.bind(this);
	
    }
    
    componentWillUnmount() {
	
    }
    
    changeUseful(type) {
	let useful = this.state.useful;
	useful[type] = ++this.state.useful[type];
	
	this.setState({
	    useful: useful
	});
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
    
    onReply() {
	this.setState({
	    isReply: true 
	});
    }
    
    onCloseReply(){
	this.setState({
	    isReply: false 
	});
    }
    

    
    render() {
	
	const {user, comment, score, color} = this.props;
	
	return (
	    <div className="comment">
		
		<div className="comment-header">
		    <div className="comment-avatar">
			<div className="avatar32" style={{backgroundImage: `url(${user.mainImage})`}}></div>
		    </div>

		    <div className="comment-username">
			<div className="username">{user.name}</div>
			<div className="userinfo">Карма: {helpers.carma(user)}</div>
		    </div>
		    
		    <If condition={score}>
			<div className="comment-score">
			    <div className="score" style={{backgroundColor: color}}>
				{(score * 5).toFixed(1)}
			    </div>
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
			<div className="comment-button comment-reply" onClick={this.onReply}>Ответить</div>
			<Useful {...this.state.useful} onClick={this.changeUseful} />
			<div className="comment-sharing">Поделиться</div>
		    </div>
		</If>

	    </div>
	);
    }

};

export default Comment;