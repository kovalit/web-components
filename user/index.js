import React, { Component } from 'react';
import './user.scss'

//Modules
import helpers from 'helpers';


const User = ({user, size}) => {
    let hashsize = parseInt(size, 10) * 2;
    return (
	<div className="user">
	    <div className="table-cell">
		<div className={`avatar${size}`} style={helpers.imgStyle(user.mainImage, `${hashsize}-${hashsize}`)}></div>
	    </div>
	    <div className="table-cell">
		<div className="user-name">{user.name}</div>
	    </div>
	</div>
    );
};

export default User;