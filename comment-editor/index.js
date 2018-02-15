import React, { Component } from 'react';
import './comment-editor.scss';

class CommentEditor extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    active: false
	};
	
	this.onFocus = this.onFocus.bind(this);
	this.onBlur = this.onBlur.bind(this);
    }
    
    componentDidMount() {
	
    
    }
    
    onFocus(){
	console.log("onFocus");
	this.setState({
	    active: true
	})
    }
    
    onBlur(){
	console.log("onBlur");
	this.setState({
	    active: false
	})
    }
    
    
    render() {
	let classNames = ["editor"];
    
	return (
	    <div className={classNames.join(" ")} >

	    <div className="editor-col-avatar">
		<div className="avatar32"></div>
	    </div>
	    <div className="editor-col-main">
		<div className="editor-reply"></div>
		<div className="editor-body">
		    <div className="editor-criterion">

		    </div>
		    <If condition={ this.props.score }>
			<div className="score">{(this.props.score * 5).toFixed(1)}</div>
		    </If>

		    <div className="editor-textarea" 
			contentEditable
			onFocus={this.onFocus} 
			onBlur={this.onBlur}
			placeholder="Оставьте свое мнение">
		    </div>
		</div>
		<div className="editor-error"></div>

		<div className="editor-attaches">
		</div>

		<If condition={this.state.active}>
		    <div className="editor-footer">
			<div className="editor-btn editor-btn_save">Сохранить</div>
			<div className="editor-btn editor-btn_foto">
			    Добавить фото
			    <input className="editor-attach" type="file" accept="image/*" />
			</div>
			<div className="editor-btn editor-btn_video">Добавить видео</div>
		    </div>
		</If>
	    </div>
	</div> 
	);
    }

};

export default CommentEditor;