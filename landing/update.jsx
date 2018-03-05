import React from 'react';

const Post = ({update}) => {
    return (
	<div className="swiper-slide">
	    <div className="updates-item white-txt">
		<a href={`/v3n/${update.sphere}/rating`} className="updates-item-main">
		    <span className="updates-item-main-img">
			<img src={update.image} alt=""/>
		    </span>
		    <div className="updates-item-main-top">
			<span className="updates-slider-date">3 февраля</span>
			<span className="updates-slider-title">{update.title}</span>
		    </div>
		    <div className="updates-item-main-btm">
			<p>{update.preamble}</p>
			<span className="updates-slider-rev-number">мнений</span>
			<div className="updates-item-main-people">
			    <span className="updates-item-main-people-img">
				<img src="/img/user.jpg" alt=""/>
				<img src="/img/user.jpg" alt=""/>
				<img src="/img/user.jpg" alt=""/>
			    </span>
			    Елена, Анастасия, ***СлАдКаЯ***
			</div>
		    </div>
		</a>
		<a href="#" className="updates-item-share"><img src="img/share-symbol.svg" alt=""/></a>
	    </div>
	</div>
    );  
};



export default Post;

