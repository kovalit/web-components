import React from 'react';
import './user-item.scss';


const User = () => {
return (
	<div className="user-item">
	    <div className="user-cell user-cell_left">
		<div className="user-cell__avatar" style={{backgroundImage:'url(https://picture.whatsbetter.me/picture/size/48-48?hash=wSS_hf6xrHw6pKMzg3JS83nA3QV31J-6WWYavara9MrACbJlQkQjZu_7q5ntDU-hvkipqp5eRMnz_ZUvxJ3zJqnvCMvyzlMKWZuvpHPfYQHJIp8nhfJkjhaVKMJU_URy_5CkiMdNdP8z8zcBczXk-OHbYTbTsISFUBZU5Q94f0FjKGdTaj4bkOr_O297SBC_tuhd7D9pt0gEwlG2WsN6lw==)'}}>
		</div>	    
	    </div>
	    <div className="user-cell">
		<div className="user-cell__name">Tatyana Yakovleva</div>
		<div className="user-cell__carma">12 | Карма: 330</div>
	    </div>
	    <div className="user-cell user-cell_right">
		<span className="badge"></span>
	    </div>
	</div>
    );
};

export default User;


