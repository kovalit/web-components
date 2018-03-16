import React, { Component } from 'react';
import Popup from 'components/popup';
import './popup-auth.scss';


const PopupAuth = (props) => {
    return (
	<div>
	    <div className="close icons_close-round"></div>
	    <div className="auth-header">
		<div className="auth-header__logo"></div>
	    </div>
	    <div className="auth-content">
		<div className="auth-content__title">Неподкупные рейтинги</div>
		<div className="auth-content__subtitle">Мнения ваших друзей, экспертов и миллионов<br /> пользователей одним кликом.</div>
		<div className="auth-content__subtitle">Узнай, что лучше для тебя по мнению <br />тех, кому ты доверяешь</div>
	    </div>
	    <div className="auth-socials">
		<a onClick={()=>props.close(props.name)} className="auth auth-socials-btn auth-socials-btn_fb">Продолжить с Facebook</a>
		<a onClick={()=>props.close(props.name)} className="auth auth-socials-btn auth-socials-btn_vk">Продолжить с ВКонтакте</a>
		<a onClick={()=>props.close(props.name)} className="auth auth-socials-btn auth-socials-btn_ok">Продолжить с Одноклассниками</a>
	    </div>
	</div>
    );
};

export default PopupAuth;