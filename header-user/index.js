import React, { Component } from 'react';
import './header-user.scss';

// Modules
import helpers from 'helpers';

const HeaderUser = ({user}) => {
    return (
	 <div className="header-user menu-owner">
	    <div className="table-cell">
		<div className="header-avatar" style={helpers.imgStyle(user.mainImage)}></div>
	    </div>
	    <div className="table-cell">
		<div className="header-username">{user.name}</div>
		<div className="header-usercarma">Карма: 0</div>
	    </div>
	</div>
    );
};

export default HeaderUser;