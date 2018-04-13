import React, { Component } from 'react';
import './comment-editor.scss';

import CriterionSlider from 'components/criterion-slider';


class CommentEditor extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    active: true,
	    text: null,
	    value: this.props.score ? this.props.score : 0,
	    sliderValue: this.props.score ? this.props.score : 0,
	    showSlider: this.props.score ? false : true,
	};
	
	this.onFocus = this.onFocus.bind(this);
	this.onBlur = this.onBlur.bind(this);
	this.onSave = this.onSave.bind(this);
	this.toggleSlider = this.toggleSlider.bind(this);
	
    }
    
    componentDidMount() {
	
    
    }
    
    
    onSave(e) {
	let params = {
	    comment: this.textarea.innerText,
	    value: parseFloat(this.state.value),
	    criteriaId: this.props.criterion.id,
	    entityId: this.props.entityId
	};
	
	this.setState({
	    sliderValue: this.state.value,
	    showSlider: false
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
    
    toggleSlider(){
	this.setState({
	    showSlider: !this.state.showSlider
	});
    }
    
    
    
    render() {
	let classNames = ["editor"];
    
	return (
	    <div className={classNames.join(" ")} >

	    <div className="editor-col-avatar">
		<div style={{backgroundImage: `url(${this.props.user.mainImage})`}} className="avatar32"></div>
	    </div>
	    <div className="editor-col-main">
		<div className="editor-reply"></div>
		<div className="editor-body">
		    <div className="editor-criterion">
			<If condition={ this.state.showSlider }>
			    <CriterionSlider 
				onChange={(val)=>this.setState({value: val})}
				editable={true}
				scalegrid={false}
				criterion={this.props.criterion} 
				value={this.state.sliderValue} 
				color={this.props.color} />
			</If>

		    </div>
		    <If condition={ !this.state.showSlider }>
			<div onClick={this.toggleSlider} className="score" style={{backgroundColor: this.props.color}}>
			    {(this.state.value * 5).toFixed(1)}
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