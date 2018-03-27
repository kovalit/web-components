import React from 'react';
import CardNumber from 'components/card-number';
import CriterionSlider from 'components/criterion-slider';
import CriterionBar from 'components/criterion-bar';
import CriterionCheckbox from 'components/criterion-checkbox';

import Comment from 'components/comment';
import CommentEditor from 'components/comment-editor';
import UserItem from 'components/user-item';

import './card.scss';

const Card = ({number, object, criteria}) => {
    //let avg_scores = object.avgScores;
    return (
	<div className="card">
	  
	    <CardNumber score={object.avg} number={number} />
	    <div className="card-header">
		<div className="card-header__title">{object.label}</div>
		<div className="card-header__opinions">
		    <div className="opinions__count">- мнений</div>
		</div>
	    </div>
	    <div className="card-left">
		<div className="card-image">
		    <img src="" />
		</div>
	    </div>
	    <div className="card-right">
		<For each="item" index="index" of={object.avg_scores }>
		    <CriterionSlider 
			editable={false}
			scalegrid={index === 0}
			key={index} 
			criterion={criteria[item.criteria_id]} 
			defaultValue={item.value} 
			color={criteria[item.criteria_id].color} />
		</For>

	    </div>	    
	</div>
    );
};

export default Card;


