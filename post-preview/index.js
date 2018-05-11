import React, { Component } from 'react';
import './post-preview.scss'

//Modules
import helpers from 'helpers';
import rand from 'random-seed';

// Components
import User from 'components/user';


const PostPreview = {
    Row: ({post, segment, onOpen}) => {	
	let gen = rand.create(post.id);
	let index = gen(24);
	let color = helpers.color(index);
	
	return (
	     <div className="posts-item" >
		<User user={post.author} size={48} />
		<If condition={segment === "me"}>
		    <div>{post.published ? "Опубликован" : "Не опубликован" }</div>
		</If>
		<div className="posts-item-content" style={{backgroundColor: color}} onClick={onOpen} >
		    <div className="posts-item__title">{post.title}</div>
		    <If condition={post.preamble !== ""} >
			<div className="posts-item__preamble">{post.preamble}</div>
		    </If>			    
		    <div className="posts-item__date">{helpers.dateFormat(post.createdAt, false)}</div>
		</div>
	    </div>
	);
    } 
};
	
	

    


export default PostPreview;