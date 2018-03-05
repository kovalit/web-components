import React from 'react';


const Post = ({post}) => {
    return (
	<div className="swiper-slide">
	    <a data-fancybox-type="ajax" href={`/posts/${post.alias}`} className="news-slider-item">
		<span className="news-slider-img">
		    <img src={post.preamble_images[0]} alt=""/>
		</span>
		<span className="news-slider-title">{post.title}</span>
		<p>{post.preamble}</p>
		<span className="news-slider-date">3 февраля</span>
	    </a>
	</div>
    );
};

export default Post;


