import React from 'react';
import Type from 'prop-types';

import helpers from 'helpers';


const Score = (props) => {
   
    let color = helpers.color(props.criterion.id);
    let progress = 50 + 50 * props.value;
    
    let style = {
	backgroundColor: color,
	width: `${progress}%`
    };

    return (	
	<div className={`score score_${props.size}`}>

	    <div className="score-slider">
		<div className="score-slider__progress" style={style}></div>
	    </div>
	    
	    {props.withScale && 
		<div className="score__scale" data-min="-5.0" data-max="5.0">0</div>
	    }
	    {props.withName && 
		<span className="score__label score__label_name">
		    {props.criterion.label}
		</span>
	    }
	    {props.withDelimiter && 
		<span className="score__delimiter"></span>
	    }
	    {props.withValue && 
		<span className="score__label score__label_value">
		    {(props.value * 5).toFixed(1)}
		</span>
	    }
	</div>
    );
};

Score.propTypes = {
    size: Type.number,
    criterion: Type.object.isRequired,
    value: Type.number.isRequired,
    withScale: Type.bool,
    withName: Type.bool,
    withValue: Type.bool,
    withDelimiter: Type.bool

};

Score.defaultProps = { 
    size: 32,
    withScale: true,
    withName: true,
    withValue: true,
    withDelimiter: true,
};

export default Score;