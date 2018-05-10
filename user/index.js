import React, { Component } from 'react';

//Modules
import helpers from 'helpers';


const User = ({user}) => {
    return (
	<div className="user">
	<div className="table-cell">
	    <div className="avatar32" style={helpers.imgStyle(user.mainImage, '64-64')}></div>
	</div>
	<div className="table-cell">
	    <div className="user">{user.name}</div>
	</div>
	</div>
    );
};

export default User;