import React from 'react';
import helpers from 'helpers';

import CardNumber from 'components/card-number';
import CriterionSlider from 'components/criterion-slider';

import Comment from 'components/comment';
import CommentEditor from 'components/comment-editor';


import './card.scss';

const Card = (props) => {
    
    let {number, entity, criteria} = props;
    
    let avgScores = entity.avgScores.sort((a,b) => {
	    return a.criteriaId - b.criteriaId;
	});
  
    let currentUserScores = entity.currentUserScores.reduce((item, cur) => 
	    {item[cur.criteriaId] = cur; return item;
	}, {});

    return (
	<div className="card">
	  
	    <CardNumber score={entity.avg} number={number} />
	    <div className="card-header">
		<div className="card-header__title">{entity.label}</div>
		<div className="card-header__opinions">
		    <div className="opinions__count">- мнений</div>
		</div>
	    </div>
	    <div className="card-left">
		<div className="card-image">
		    <img src={helpers.imgStyle(entity.mainImage)} />
		</div>
	    </div>
	    <div className="card-right">
		<For each="item" index="index" of={ avgScores }>
	
		    <div key={index}  onClick={()=>props.toggleScores(entity.id, item.criteriaId, item.isOpen )}>
			
			<CriterionSlider 
			    editable={false}
			    scalegrid={index === 0}
			    criterion={criteria[item.criteriaId]} 
			    value={item.value} 
			    color={criteria[item.criteriaId].color} />
			    
			    
		    </div>
		    
		    <If condition={item.isOpen}>	
		    
			<For each="score" index="num" of={item.scores }>
			    <Comment 
				key={num}
				comment={score.comment}
				score={score.value}
				user={score.user}
				color={criteria[item.criteriaId].color} />
			</For>
			
			<CommentEditor 
			    entityId={entity.id}
			    criterion={criteria[item.criteriaId]} 
			    color={criteria[item.criteriaId].color}
			    user={props.me}
			    onSave={(params)=>props.onScoreSave(params)}
			    score={item.criteriaId in currentUserScores ?  currentUserScores[item.criteriaId].value : null} />
		    </If>

		</For>

	    </div>	    
	</div>
    );
};

export default Card;


