import React, {Component} from 'react';
import helpers from 'helpers';

import User from '../user';
import Score from '../score';

import './score-full.scss';

class ScoreFull extends Component {
    
    constructor(props) {
	super(props);
    }
    
    render() {
	let {criterion, entity, user, value} = this.props;

	return (
	    <div className="score-full">
		<div className="score-full-entity sfe">
		    <div className="sfe__img" style={helpers.imgStyle(entity.mainImage, '256-256')}></div>
		    
		    <div className="sfe__label">{entity.label}</div>
		    
		</div>
		<div className="score-full-criterion sfc">
		    <ScoreBar size={48} criterion={criterion} value={value} />
		</div>
	    </div>
	);
    }
};

export default ScoreFull;


