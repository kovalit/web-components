import React from 'react';
import CardNumber from 'components/card-number';
import './card.scss';

const Card = props => {
return (
	<div className="card">
	    <CardNumber score="4.0" number="1" />
	    <div className="card-header">
		<div className="card-header__title">Бегущий по лезвию 2049</div>
		<div className="card-header__opinions">
		    <div className="opinions__count">32 016 мнений</div>
		</div>
	    </div>
	    <div className="card-left">
		<div className="card-image">
		    <img src="https://picture.whatsbetter.me/picture/size/302-auto?hash=B_KbSWjOsfYbZljRIXC_S9oROjHQ9D6Ht_T01naIN2bnyHW223J1ow==" />
		</div>
	    </div>
	    <div className="card-right">Средняя оценка</div>	    
	</div>
    );
};

export default Card;

