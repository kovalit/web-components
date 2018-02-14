import React, { Component } from 'react';
import Useful from 'components/useful';
import './comment.scss';

class Comment extends Component {
    
    constructor(props) {
	super(props);
	this.node = null;

	this.state = {
	    fullText: false,
	    text: "Может быть это ощущение у меня от оригинального фильма, но в этом ремейке очень много сцен и локаций, из-за этого сложилось ощущение скомканости. Еще весь фильм ждёшь этого Харрисона Форда, а он как в фоллауте тусуется один в постапокалиптичном городе… Это было тупо. Под конец стало хорошо.",
	};

    }
    
    componentWillUnmount() {
	
    }

    
    getPreamble(text){
	let limit = 20;
	
	if (text.length <= limit) {
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
		<span key="2"
		    onClick={()=>this.setState({fullText: true})} 
		    style={{display: this.state.fullText ? "none" : "inlile-block"}} 
		    className="comment-text-more">
		    Читать далее
		</span>,
		<span key="3" 
		    style={{display: this.state.fullText  ? "inline" : "none"}}>
		    {hiddenText}
		</span>
	];
    }
    
    render() {
	return (
	    <div className="comment" data-author="Vladislav Sozonov" data-id="@n59f2eda1d262b5000f50a20e">
		
		<div className="comment-header">
		    <div className="comment-avatar">
			<div className="avatar32" style={{backgroundImage: 'url(https://picture.whatsbetter.me/picture/size/64-64?hash=bP5ou3q84ghMbIbaKOBIhqtUFFoEoI-6rEhMXJCue0z0UX9U6dfyBRLTC2imWxdeWICAxHI_7NPYnlQ-QkjaCu1Mq9OEOIjBM8Utdk5xvHUIPzW8-mC-GHZlO1_q_Je0C63UK5aHnoSD86unY2FeM8QbJnaHFxZCD68laXM5mVnsUlJ_-2RrNreLs11ZGnzN8z-D4hS6Ki4bUyutandSeA==)'}}></div>
		    </div>

		    <div className="comment-username">
			<div className="username">Vladislav Sozonov</div>
			<div className="userinfo">Карма: 160</div>
		    </div>
		    <div className="comment-score">
			<div className="score" style={{backgroundColor: 'rgb(230, 113, 89)'}}>3.5</div>
		    </div>
		</div>
		
		<div className="comment-content">
		    {this.getPreamble(this.state.text)}
		</div>
		
		<div className="comment-date">27 октября 2017 года в 08:26</div>
		
		<div className="comment-footer">
		    <div className="comment-button comment-reply">Ответить</div>
		    <Useful />
		    <div className="comment-sharing">Поделиться</div>
		</div>
		
	    </div>
	);
    }

};

export default Comment;