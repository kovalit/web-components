import React, {Component} from 'react';
import helpers from 'helpers';

import User from 'components/user';
import ScoreBar from 'components/score-bar';

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
		    <div className="sfe__label">{entity.label}</div>
		    <div className="sfe__img-wrap">
			<div className="sfe__img" style={helpers.imgStyle(entity.mainImage)}></div>
		    </div>
		    
		</div>
		<div className="score-full-criterion sfc">
		    <User user={user} />
		    <ScoreBar criterion={criterion} value={value} />
		</div>
	    </div>
	);
    }
};

export default ScoreFull;


