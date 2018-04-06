import React, { Component } from 'react';
import './post-top.scss';


class PostTop extends Component {
    constructor(props) {
	  super(props);
    }

    render() {
	const id = this.props.block.get("data").get("id");
	const key = this.props.block.getKey();
	return (
	    <div className='post-top'>
		<div className="post-top-delete" onClick={()=>this.props.blockProps.onClick(key)}>
		    <i className="fas fa-times-circle"></i>
		</div>

		<div>Это топ</div>
		<div style={{height: "60px"}}>
		    <div className="card-number__value">1</div>
		    <div className="card-header__title">Volvo 480 1986 – 1996 Купе</div>		 
		</div>
		<div className="clear-fix"></div>
		<div style={{height: "60px"}}>
		    <div className="card-number__value">2</div>
		    <div className="card-header__title">Renault Megane II рестайлинг Хэтчбек 5 дв.</div>		 
		</div>
		<div className="clear-fix"></div>
		 <div style={{height: "60px"}}>
		    <div className="card-number__value">3</div>
		    <div className="card-header__title">Opel Zafira OPC A рестайлинг Компактвэн</div>		 
		</div>
		<div className="clear-fix"></div>
	    </div>
	);
    }
}

export default PostTop;