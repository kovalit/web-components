import React, { Component } from 'react';
import Popup from 'components/popup';
if (typeof window !== 'undefined') require('./popup-auth.scss');


const PopupAuth = () => {
    return (
	<Popup name="auth">
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
		<a className="auth auth-socials-btn auth-socials-btn_fb">Продолжить с Facebook</a>
		<a className="auth auth-socials-btn auth-socials-btn_vk">Продолжить с ВКонтакте</a>
		<a className="auth auth-socials-btn auth-socials-btn_ok">Продолжить с Одноклассниками</a>
	    </div>
	</Popup>
    );
};

export default PopupAuth;