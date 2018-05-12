import React, { Component } from 'react';
import './post-preview.scss'

//Modules
import helpers from 'helpers';
import rand from 'random-seed';
import classnames from 'classnames';

// Components
import User from 'components/user';


const PostPreview = {
    Row: ({post, segment, onOpen}) => {	
	let withImages = post.preambleImages.length > 0;
	let gen = rand.create(post.id);
	let index = gen(24);
	let color = withImages ? "#fff" : helpers.color(index);

	return (
	     <div className="post-prewiew-row ppr" onClick={onOpen}>
		<User user={post.author} size={48} />
		<If condition={segment === "me"}>
		    <div>{post.published ? "Опубликован" : "Не опубликован" }</div>
		</If>
		<If condition={withImages}>
		    <div className="ppr-images">
			<For each="image" index="index" of={ post.preambleImages }>
			    <div className="ppr__image" style={helpers.imgStyle(image.hash)} />
			</For>
		    </div>
		</If>
		<div className={classnames({"ppr-content": true, "ppr-content-with-img": withImages})} 
		    style={{backgroundColor: color}} >
			
 		    <div className="ppr__title">{post.title}</div>
		    <If condition={post.preamble !== ""}>
			<div className="ppr__preamble">{post.preamble}</div>
		    </If>			    
		    <div className="ppr__date">{helpers.dateFormat(post.createdAt, false)}</div>
		</div>
	    </div>
	);
    } 
};
	
	

    


export default PostPreview;