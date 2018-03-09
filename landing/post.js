import React from 'react';
import ReactDOM from 'react-dom';

import PopupPost from 'components/popup-post';

const Post = ({post}) => {
    
    const onClick = () => {	
	ReactDOM.render(<PopupPost alias={post.alias} />, document.getElementById('popup-container'));
    };
    
    return (
	<div onClick={onClick} className="swiper-slide">
	    <div onClick={onClick.bind(null, post.alias)}  className="news-slider-item">
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
		<span className="news-slider-date">3 февраля</span>
	    </div>
	</div>
    );
};

export default Post;

