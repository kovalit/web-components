import React from 'react';

import Post from 'components/landing/post';
import Update from 'components/landing/update';
import Header from 'components/landing/header';


const Layout = props => {

    return (
	<div className="wrapper">
	    <Header openLogin={props.openLogin} />
	    
	    <div className="first-screen">
		<div className="container">
		    <div className="first-screen-block clearfix narrow-block">
			<div className="first-screen-txt">
			   <span className="first-screen-logo">
			       <img src="/img/logo@2x.png" alt="" />
			   </span>
			    <h1>Неподкупные рейтинги. Проверено друзьями.</h1>
			    <p>Первое место в Интернете, где вы можете мгновенно узнать что лучше по мнению тех, кому вы доверяете, включая мнения друзей, экспертов и миллионов пользователей.</p>
			</div>
			<div className="first-screen-slider">
			    <div className="swiper-container first-slider">
				<div className="swiper-wrapper">
				    <div className="swiper-slide">
					<img src="img/Bitmap@2x.png" alt="" />
				    </div>
				    <div className="swiper-slide">
					<img src="/img/Bitmap@2x.png" alt="" />
				    </div>
				    <div className="swiper-slide">
					<img src="/img/Bitmap@2x.png" alt="" />
				    </div>
				</div>
			    </div>
			</div>
		    </div>
		</div>
	    </div>
	    <div className="news-screen">
		<div className="container">
		    <div className="news-slider-block">
			<div className="swiper-container news-slider">
			    <div className="swiper-wrapper">
				<For each="post"index="index" of={props.posts}>
				    <Post key={index} post={post} />
				</For>


			    </div>

			    <div className="swiper-button-next swiper-button-white"></div>
			    <div className="swiper-button-prev swiper-button-white"></div>
			</div>
		    </div>
		</div>
	    </div>
	    <section className="main-section">
		<div className="updates-block">
		    <div className="container">
			<div className="updates-slider-block narrow-block">
			    <div className="updates-block-top clearfix">
				<h2>Обновления<span>+{props.updates.length}</span></h2>
				<div className="swiper-pagination"></div>
			    </div>
			    <div className="swiper-container updates-slider">
				<div className="swiper-wrapper">
				    <For each="update"index="index" of={props.updates}>
					<Update key={index} update={update} sphere={props.spheres[update.sphere]} />
				    </For>
				</div>
			    </div>
			</div>
		    </div>
		</div>
		{props.children}
	    </section>
	    <section className="info-section">
		<div className="info-block">
		    <div className="container">
			<h2>Узнать, что лучше по мнению друзей</h2>
			<p className="subtitle-txt">Авторизируйтесь с помощью соцсети:</p>
			<div className="social-block">
			    <a href="#" className="social-link"><img src="/img/sharing-fb.svg" alt=""/>Продолжить с facebook</a>
			    <a href="#" className="social-link"><img src="/img/sharing-vk.svg" alt=""/>Продолжить с vkontakte</a>
			    <a href="#" className="social-link"><img src="/img/sharing-ok.svg" alt=""/>Продолжить с odnoklassniki</a>
			</div>
			<p className="grey-txt">Продолжая, вы соглашаетесь с условиями <a href="#">Пользовательского соглашения</a></p>
		    </div>
		</div>
		<div className="partners-block white-txt">
		    <div className="container">
			<div className="partners-block-wrap narrow-block">
			    <div className="partners-txt">
				<h2>Наши медиа-друзья</h2>
				<p className="subtitle-txt">Хотите актуальный вирусный контент? Напишите нам на media@whatsbetter.me</p>
			    </div>
			    <div className="partners-logos">
				<a href="#" className="partner-logo"><img src="/img/wifiru-logo@2x.png" alt=""/></a>
				<a href="#" className="partner-logo"><img src="/img/metro@2x.png" alt=""/></a>
			    </div>
			</div>
		    </div>
		</div>
		<footer>
		    <div className="container">
			<div className="contact-form"></div>
			<div className="developers-foot">
			    <p className="copyright-txt">2017 © «WhatsBetter.me Eastern Europe» Ltd</p>
			    <a href="#" className="logo-foot"><img src="/img/logo-foot.png" alt=""/></a>
			    <a href="#" className="agreement-link">Пользовательское соглашение</a>
			</div>
		    </div>
		</footer>
	    </section>

	   <div className="modal-wrap">
	       
	   </div>
	</div>

		
    );  
};

export default Layout;