import React, { Component } from 'react';
import Icon from 'components/icon';
import helpers from 'helpers';
import './header-sphere.scss';


const HeaderSphere = ({sphere}) => {
    return (
	<div className="header-sphere">
	    <div className="header-sphere__title"><span>Рейтинги:</span> {sphere.label}</div>
	    <div className="header-sphere__stat">
		<Icon name="objects-count" />
		<span className="elcount" dangerouslySetInnerHTML={{ __html: 
		    helpers.declension(sphere.count_entities, ['<b>объект</b>','<b>объекта</b>','<b>объектов</b>', '<b>Нет объектов</b>']) }} />
		<span>| </span> 
		<Icon name="users-count" />
		<span className="elcount" dangerouslySetInnerHTML={{ __html: 
		    helpers.declension(0, ['<b>мнение</b>','<b>мнения</b>','<b>мнений</b>', '<b>нет мнений</b>']) }} /> 
	    </div>
	    <div className="sphere-share"> </div>   
	</div>
    );
};

export default HeaderSphere;