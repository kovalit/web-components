import React from 'react';
import helpers from 'helpers';

const Post = ({update, sphere}) => {
    return (
	<div className="swiper-slide">
	    <div className="updates-item white-txt">
		<a href={`/v3n/${update.sphere}/rating`} className="updates-item-main">
		    <span className="updates-item-main-img">
			<img src={update.image} alt=""/>
		    </span>
		    <div className="updates-item-main-top">
			<span className="updates-slider-date">{helpers.dateFormat(update.created_at, false)}</span>
			<span className="updates-slider-title">{update.title}</span>
		    </div>
		    <div className="updates-item-main-btm">
			<p>{update.preamble}</p>
			<span className="updates-slider-rev-number">
			    {helpers.declension(sphere["count.scores"], ["мнение", "мнения", "мнений", "Нет мнений"])}
			</span>

		    </div>
		</a>
		<a href="#" className="updates-item-share"><img src="img/share-symbol.svg" alt=""/></a>
	    </div>
	</div>
    );  
};



export default Post;

