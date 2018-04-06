import React, { Component } from 'react';
import './post-score.scss';

class PostScore extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	const id = this.props.block.get("data").get("id");
	const key = this.props.block.getKey();
	return (
	    <div className='post-score'>
		<div className="bar bar_criterion">
		    <div className="value" style={{width: "90.4167%", backgroundColor: "rgb(100, 185, 223)"}}></div>
		    <div className="slider" style={{left: "90.4167%"}}></div>
		    <span className="bar_item bar_scale start-label">надежность</span>
		    <span className="bar_item bar_scale center"></span>
		    <span className="bar_item bar_scale end-label">4</span>
		</div>

		<div className="post-score-delete" onClick={()=>this.props.blockProps.onClick(key)}>
		    <i className="fas fa-times-circle"></i>
		</div>
	    </div>
	);
    }
}

export default PostScore;