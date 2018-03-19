import React from 'react';
import helpers from 'helpers';
import './user-item.scss';


const UserItem = (props) => {
return (
	<div className="user-item">
	    <div className="user-cell user-cell_left">
		<div className="user-cell__avatar" style={helpers.imgStyle(props.user.main_image_hash, "48-48")}>
		</div>	    
	    </div>
	    <div className="user-cell">
		<div className="user-cell__name">{props.user.label}</div>
		<div className="user-cell__carma">Карма: {helpers.carma(props.user)}</div>
	    </div>
	    <div className="user-cell user-cell_right">
		<span className="badge"></span>
	    </div>
	</div>
    );
};

export default UserItem;


