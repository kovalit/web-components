import React, { Component } from 'react';
import ScoreFull from 'components/score-full';
import './post-score.scss';

class PostScore extends Component {
    constructor(props) {
	super(props);
    }

    render() {
	const score= this.props.blockProps.score;
	console.log("score", score);
	const key = this.props.block.getKey();
	
	return (
	    <div className='post-score'>
		<ScoreFull 
		    value={score.value}
		    user={score.user}
		    criterion={score.criterion}
		    entity={score.entity}
		/>

		<div className="post-score-delete" onClick={()=>this.props.blockProps.onClick(key)}>
		    <i className="fas fa-times-circle"></i>
		</div>
	    </div>
	);
    }
}

export default PostScore;