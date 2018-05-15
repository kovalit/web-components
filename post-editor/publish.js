import React, { Component } from 'react';
import './publish.scss';

// Modules
import { slugify } from 'transliter';
import helpers from 'helpers';


class PostPublist extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    preamble: this.props.post.preamble,
	    images: [],
	    alias: slugify(this.props.post.title)
	};
	
	this.onImageUpload = this.onImageUpload.bind(this);
	this.onSave = this.onSave.bind(this);
    }
    
    onImageUpload(e) {	
	const f = (body) => {
	    let images = this.state.images;
	    images.push(body.hash);
	    this.setState({
		images: images
	    }); 
	};
	
	helpers.imgUpload(e.target.files, f);
    }
    
    
    onSave() {
	let data = {};
	data.alias = this.state.alias;
	
	if (this.state.preamble !== "") {
	    data.preamble = this.state.preamble;
	}
	
	if (this.state.images.length > 0) {
	    data.preambleImages = this.state.images.join(",");  
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
		
		<For each="image" index="index" of={ this.state.images }>
		    <img key={index} src={helpers.imgUrl(image)} />
		</For>
		
		<input type="file" ref="fileInput" multiple onChange={this.onImageUpload} />

		<div className="post-publish__btn" onClick={this.onSave}>Опубликовать</div>
	    </div>
	);
    }
};

export default PostPublist;
