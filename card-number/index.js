import React from 'react';
import './card-number.scss';


const CardNumber = ({number, score}) => {
return (
	<div className="card-number">
	    <div className="card-number__value">{number}</div>
	    <div className="card-number__score">{score}</div>
	    <div className="card-number__label">Средняя оценка</div>	    
	</div>
    );
};

export default CardNumber;


