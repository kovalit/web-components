import React, { Component } from 'react';
import "./post.scss"

//modules
import api from 'api';
import request from 'request';
import { mountComponent } from './mount-component';	

//component
import User from 'components/user';
import ScoreFull from 'components/score-full';

class Post extends Component {

    constructor(props) {
        super(props);	
	
	this.state = {
	    post: null
	};	
    }
    
    
    componentDidMount() {
	request(api.posts.findByAlias, {id: this.props.id})
	    .then(body => {
		this.setState({
		    post: body.post,
		});
	    });
    }
    
    
    componentDidUpdate() {
	if (!this.state.post) {
	    return;
	}

	let {scores} = this.state.post.metadata;

	if (scores.length > 0) {
	    mountComponent('Score', ScoreFull, scores);   
	}
	 
	//mountComponent('Gallery', Gallery, passProps); 
	//mountComponent('Top', Top, passProps); 
    }


//    onEdit() {
//	if (this.props.isPopup) {
//	    this.props.hidePopup("post");
//	    this.props.showPopup("post-edit", {id: this.state.post.id});
//	}
//	else {
//	    location.replace("/posts/edit/" + this.state.post.id);
//	}
//    }

   

    render() {
	
	const { post } = this.state;
	
        return (
	    <div className="post-wrapper">
		<div className="post-close" onClick={this.props.onClose}></div>
		<div className="post" onClick={this.focus}>
		    <If condition={post}>    
			<div className="post-header">
			    <div className="float-left">
				<User user={post.author} size={48} />
			    </div>		 
			    <If condition={post.author.id === this.props.me.id}>
				<div className="float-right"> 
				    <div className="post-btn" onClick={this.props.onEdit}>Редактировать</div> 
				</div>
			    </If>

			    <div className="clear-fix"> </div>

			</div>


			<div className="post-title">{post.title}</div>
			<div dangerouslySetInnerHTML={{__html: decodeURI(post.content) }} /> 
		    </If>
		</div>
	    </div>
	    
	);
    }
}

export default Post;
    
