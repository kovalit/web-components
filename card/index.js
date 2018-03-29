import React from 'react';
import CardNumber from 'components/card-number';
import CriterionSlider from 'components/criterion-slider';
import CriterionBar from 'components/criterion-bar';
import CriterionCheckbox from 'components/criterion-checkbox';

import Comment from 'components/comment';
import CommentEditor from 'components/comment-editor';
import UserItem from 'components/user-item';

import './card.scss';

const Card = (props) => {
    let {number, object, criteria} = props;

    
    let avg_scores = object.avg_scores.sort(function(a,b) {
	return a.criteria_id - b.criteria_id;
    });

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
		<For each="item" index="index" of={avg_scores }>
	
		    <div key={index}  onClick={()=>props.openScore(object.id, item.criteria_id, )}>
			<CriterionSlider 
			    editable={false}
			    scalegrid={index === 0}
			    criterion={criteria[item.criteria_id]} 
			    defaultValue={item.value} 
			    color={criteria[item.criteria_id].color} />

			<If condition={item.isOpen}>
			    <div>sdsds</div>
			</If>
			
			
		    </div>
		</For>

	    </div>	    
	</div>
    );
};

export default Card;


