import React from 'react';
import ReactDOM from 'react-dom';

import PopupPost from 'components/popup-post';

const Post = ({post}) => {
    
    const onClick = () => {	
	ReactDOM.render(<PopupPost />, document.getElementById('popup-container'));
    };
    
    return (
	<div onClick={onClick} className="swiper-slide">
	    <div onClick={onClick.bind(null, post.alias)}  className="news-slider-item">
		<span className="news-slider-img">
		    <img src={post.preamble_images[0]} alt=""/>
		</span>
		<span className="news-slider-title">{post.title}</span>
		<p>{post.preamble}</p>
		<span className="news-slider-date">3 февраля</span>
	    </div>
	</div>
    );
};

export default Post;

