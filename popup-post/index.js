import React, { Component } from 'react';
import Popup from 'components/popup';
import './popup-post.scss';


class PopupPost extends Component {
    
    constructor(props) {
	super(props);


	this.state = {
	    content: "",
	    title: "",
	};
    }
    
    componentDidMount(){
	fetch('/posts/json/' + this.props.alias)
	    .then(res=>res.json())
	    .then(body => {
		this.setState({
		    content: body.content,	
		    title: body.title,
		})
	    })
    }
    
    render() {
	return (
	    <div className="article">

		<div className="article-container">
		    <div className="article-top clearfix">
			<a href="#" className="article-logo">
			    <img src="/img/logo@2x.png" alt=""/>
			</a>
			<a href="#" className="grey-btn btn">Все статьи</a>
		    </div>
		    <div className="article-txt">
			<h2>{this.state.title}</h2>
			<div dangerouslySetInnerHTML={{__html: this.state.content}} />
		    </div>
		</div>

		<a href="#" className="all-link btn">Все посты</a>
	    </div>
	);
    }
};

export default PopupPost;