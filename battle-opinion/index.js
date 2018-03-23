import React, { Component } from 'react';
import './battle-opinion.scss';
import helpers from 'helpers';


class BattleOpinion extends Component {
    render() {
	let {object, user} = this.props;
	
	return (
	    <div className="opinion">
		<div className="comment-header">
		    <div className="comment-avatar">
			<div className="avatar32" style={helpers.imgStyle(user.main_image_hash, "64-64")}></div>
		    </div>

		    <div className="comment-username">
			<div className="username">{user.label}</div>
			<div className="userinfo">Карма: {helpers.carma(user)}</div>
		    </div>
		</div>

		<div className="opinion-content">
		    <div className="opinion__object">
			<div className="object-select" style={helpers.imgStyle(object.main_image_hash, "128-128")}></div>
		    </div>
		    <div className="opinion__text">
			<div
			    ref={(elem) => {this.elem = elem}}
			    className="opinion__textarea" 
			    placeholder="Оставьте свое мнение"
			    dangerouslySetInnerHTML={{__html: this.props.html }}
			    contentEditable={ true } />
		    </div>
		</div>
		<div onClick={()=> {this.props.onSave(this.elem.innerText); this.elem.innerText="" } } className="button">Сохранить</div>
		<div className="clear-fix"></div>
	    </div>
	);
    }
};

export default BattleOpinion;