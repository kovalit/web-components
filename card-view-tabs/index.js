import React from 'react';
import './card-views.scss';


const CardViews= ({type}) => {
    return (
	<div className="card-settings">
	    <div className={`card-view card-view_full ${type === "full" ? "active" : ""}`}></div>
	    <div className={`card-view card-view_short  ${type === "short" ? "active" : ""}`}></div>
	</div>
    );
};

export default CardViews;


