import React, { Component } from 'react';
import './publish.scss';


class PostPublist extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    preamble: ""
	};
	
	this.onChange = this.onChange.bind(this);
	this.onSave = this.onSave.bind(this);
    }
    
    onChange() {
	
    }
    
    onSave() {
	this.props.onPublish();
    }
    
    stopPropagation(e) {
	e.stopPropagation();
	e.nativeEvent.stopImmediatePropagation();
    }

    render() {
	return (
	    <div className="post-publish"  onClick={this.stopPropagation}>
		<div className="post-publish__title">Публикация</div>
		<label>Ссылка на статью</label>
		<input type="input" placeholder="" value="vk.com/@kovalit-" />

		<label>Аннотация</label>
		<textarea row="3"></textarea>

		<label>Обложка</label>
		<input type="file" ref="fileInput" onChange={this.onChange} />

		<div className="post-publish__btn" onClick={this.onSave}>Опубликовать</div>
	    </div>
	);
    }
};

export default PostPublist;
