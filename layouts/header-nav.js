import React from 'react';
import classnames from 'classnames';
import './header-nav.scss'

const HeaderNav = (props) => {

    return (
	<div className="header-nav">
	    <a className={classnames({"header-nav__item": true, active: props.page === "rating"})} 
			href="/main/auto/rating">Рейтинги</a>
	    <a className={classnames({"header-nav__item": true, active: props.page === "posts"})}   
		href="/posts">Посты</a>
	</div>
		    
    ); 
};

export default HeaderNav;