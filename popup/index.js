import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './popup.scss';


const Popup = (props) => {
   
    const innerClick = (e) => {
	e.stopPropagation();
    };

    const classNames = [];
    const name = ("name" in props) ? props.name : "default";

    classNames.push('popup');
    classNames.push('popup-' + name);

    return (
	<div className={classNames.join(' ')} onMouseUp={()=>props.close(props.name)}>	
	    <div onMouseUp={innerClick} className="popup-window inner-scroll">
		<div onClick={()=>props.close(props.name)} className="popup-close"></div>
		{props.children}
	    </div>
	</div>
    );
};

export default Popup;