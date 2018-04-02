import React from 'react';
import CardNumber from 'components/card-number';
import CriterionSlider from 'components/criterion-slider';

import Comment from 'components/comment';
import CommentEditor from 'components/comment-editor';


import './card.scss';

const Card = (props) => {
    
    let {number, object, criteria} = props;

    
    let avg_scores = object.avg_scores.sort(function(a,b) {
	return a.criteria_id - b.criteria_id;
    });
  
    let current_user_scores = object.current_user_scores.reduce((item, cur)=> {item[cur.criteria_id] = cur; return item;}, {});

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
	
		    <div key={index}  onClick={()=>props.toggleScores(object.id, item.criteria_id, item.isOpen )}>
			
			<CriterionSlider 
			    editable={false}
			    scalegrid={index === 0}
			    criterion={criteria[item.criteria_id]} 
			    defaultValue={item.value} 
			    color={criteria[item.criteria_id].color} />
			    
			    
		    </div>
		    
		    <If condition={item.isOpen}>	
		    
			<For each="score" index="num" of={item.scores }>
			    <Comment 
				key={num}
				comment={score.comment}
				score={score.value}
				user={score.user}
				color={criteria[item.criteria_id].color} />
			</For>
			
			<CommentEditor 
			    object_id={object.id}
			    criterion={criteria[item.criteria_id]} 
			    color={criteria[item.criteria_id].color}
			    user={props.me}
			    onSave={(params)=>props.onScoreSave(params)}
			    score={item.criteria_id in current_user_scores ?  current_user_scores[item.criteria_id].value : null} />
		    </If>

		</For>

	    </div>	    
	</div>
    );
};

export default Card;


