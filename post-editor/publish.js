import React, { Component } from 'react';
import { slugify } from 'transliter';
import './publish.scss';


class PostPublist extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    preamble: this.props.post.preamble,
	    alias: slugify(this.props.post.title)
	};
	
	this.onChange = this.onChange.bind(this);
	this.onSave = this.onSave.bind(this);
    }
    
    onChange() {
	
    }
    
    onSave() {
	let data = {};
	data.alias = this.state.alias;
	
	if (this.state.preamble !== "") {
	    data.preamble = this.state.preamble;
	}
	
	data.published = true;
	this.props.onPublish(data);
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
		<input 
		    type="input" 
		    value={this.state.alias} />

		<label>Аннотация</label>
		<textarea 
		    row="3"
		    value={this.state.preamble} 
		    onChange={(e) => this.setState({preamble: e.target.value})}></textarea>

		<label>Обложка</label>
		<input type="file" ref="fileInput" onChange={this.onChange} />

		<div className="post-publish__btn" onClick={this.onSave}>Опубликовать</div>
	    </div>
	);
    }
};

export default PostPublist;
