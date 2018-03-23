import React, { Component } from 'react';
import './battle-opinion.scss';
import helpers from 'helpers';


class BattleCommentEditor extends Component {
    
    constructor(props) {
	super(props);
	
	this.onClick = this.onClick.bind(this);
    }
    
    
    onClick() {
	this.props.onSave(this.textarea.innerText); 
	this.textarea.innerText = "";
    }
    
    
    render() {
	let {object, user} = this.props;
	
	return (
	    <div className="bc-editor">
		<div className="bc-editor-head">
		    <div className="bc-editor-head__avatar">
			<div className="avatar32" style={helpers.imgStyle(user.main_image_hash, "64-64")}></div>
		    </div>

		    <div className="bc-editor-head__user">
			<div className="username">{user.label}</div>
			<div className="userinfo">Карма: {helpers.carma(user)}</div>
		    </div>
		</div>

		<div className="bc-editor-row">
		    <div className="bc-editor-row__object">
			<div className="bc-editor-object" style={helpers.imgStyle(object.main_image_hash, "128-128")}></div>
		    </div>
		    <div className="bc-editor-row__text">
			<div
			    ref={(el) => {this.textarea = el}}
			    className="bc-editor-textarea" 
			    placeholder="Оставьте свое мнение"
			    dangerouslySetInnerHTML={{__html: this.props.html }}
			    contentEditable={ true } />
		    </div>
		</div>
		<div onClick={this.onClick} className="bc-editor-save">Сохранить</div>
		<div className="clear-fix"></div>
	    </div>
	);
    }
};

export default BattleCommentEditor;