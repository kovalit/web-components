import React, { Component } from 'react';


const User = ({user}) => {
    return (
	<div className="user">
	<div className="table-cell">
	    <div className="avatar32" style={{backgroundImage: `url(${user.mainImage})`}}></div>
	</div>
	<div className="table-cell">
	    <div className="user">{user.name}</div>
	</div>
	</div>
    );
};

export default User;