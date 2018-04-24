import React from 'react';
import helpers from 'helpers';

const Post = ({post, onClick}) => {
    return (
	<div onClick={onClick.bind(null, post.id)} className="swiper-slide">
	    <div className="news-slider-item">
		<span className="news-slider-img">
		    <If condition={post.preamble_images.length === 1}>
		    
			<img src={post.preamble_images[0]} alt=""/>
			
		    <Else />
		    
			<span className="news-slider-img-wrap">
			    <For each="preamble_images" index="index" of={post.preamble_images}>
				<span key={index} className="news-slider-img-inner">
				    <img src={preamble_images} alt=""/>
				</span>
			    </For>
			</span>
			
		    </If>
		    
		</span>
		<span className="news-slider-title">{post.title}</span>
		<p>{post.preamble}</p>
		<span className="news-slider-date">{helpers.dateFormat(post.created_at, false)}</span>
	    </div>
	</div>
    );
};

export default Post;

