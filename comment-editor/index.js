import React, { Component } from 'react';
import './comment-editor.scss';

import CriterionSlider from 'components/criterion-slider';


class CommentEditor extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    active: true,
	    text: null,
	    value: null,
	};
	
	this.onFocus = this.onFocus.bind(this);
	this.onBlur = this.onBlur.bind(this);
	this.onSave = this.onSave.bind(this);
    }
    
    componentDidMount() {
	
    
    }
    onSave(e) {
	let params = {
	    text: this.textarea.innerText,
	    value: this.state.value,
	    criterion_id: this.props.criterion.id,
	    object_id: this.props.object_id
	};
	
	this.setState({
	    value: null
	});

	this.props.onSave(params); 
	this.textarea.innerText = "";
	e.stopPropagation();
    }
    
    onFocus(){
	console.log("onFocus");
//	this.setState({
//	    active: true
//	})
    }
    
    onBlur(){
	console.log("onBlur");
//	this.setState({
//	    active: false
//	})
    }
    
    
    render() {
	let classNames = ["editor"];
    
	return (
	    <div className={classNames.join(" ")} >

	    <div className="editor-col-avatar">
		<div style={{backgroundImage: `url(${this.props.user.main_image})`}} className="avatar32"></div>
	    </div>
	    <div className="editor-col-main">
		<div className="editor-reply"></div>
		<div className="editor-body">
		    <div className="editor-criterion">
			<CriterionSlider 
			    onChange={(val)=>this.setState({value: val})}
			    editable={true}
			    scalegrid={false}
			    criterion={this.props.criterion} 
			    defaultValue={0} 
			    color={this.props.color} />
		    </div>
		    <If condition={ this.props.score }>
			<div className="score" style={{backgroundColor: this.props.color}}>
			    {(this.props.score * 5).toFixed(1)}
			</div>
		    </If>

		    <div className="editor-textarea" 
			contentEditable
			ref={(el) => {this.textarea = el}}
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
			<div onClick={this.onSave} className="editor-btn editor-btn_save">Сохранить</div>
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