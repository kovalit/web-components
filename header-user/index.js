import React, { Component } from 'react';
import './header-user.scss';


const HeaderUser = ({user}) => {
    return (
	 <div className="header-user menu-owner">
	    <div className="table-cell">
		<div className="header-avatar" style={{backgroundImage: `url(${user.main_image})`}}></div>
	    </div>
	    <div className="table-cell">
		<div className="header-username">{user.name}</div>
		<div className="header-usercarma">Карма: 95</div>
	    </div>
	</div>
    );
};

export default HeaderUser;