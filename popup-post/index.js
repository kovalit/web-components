import React, { Component } from 'react';
import Popup from 'components/popup';
if (typeof window !== 'undefined') require('./popup-post.scss');


const PopupPost = () => {
    return (
	<Popup name="post">
	
	<div className="article">
		   <div className="article-container">
		       <div className="article-top clearfix">
			   <a href="#" className="article-logo">
			       <img src="/img/logo@2x.png" alt=""/>
			   </a>
			   <a href="#" className="grey-btn btn">Все статьи</a>
		       </div>
		       <div className="article-txt">
			   <img className="article-img" src="/img/article@2x.jpg" alt=""/>
			   <h2>«Голодные игры» + «Кто хочет стать миллионером».</h2>
			   <p>Дело в том, что все триста управленцев гарантированно получат один миллион рублей независимо от того, войдут они в «золотую сотню» победителей или нет. Эти деньги они смогут потратить на свое обучение в одном из российских вузов или оплатить любую отечественную программу дополнительного образования, они даже могут купить пожизненную подписку на журнал «Наука и жизнь», но точно не смогут на призовые коврижки полюбоваться яркими звездами Корсики.</p>
			   <p><b>Только в России и только для ума. Если миллиона на образование не хватит, финалист может добавить деньги из своего кармана.</b></p>
		       </div>
		       <div className="rates-block-main-filter rates-block-main-filter-modal">
			   <h4>Критерии</h4>
			   <div className="rates-block-main-filter-colored">
			       <a href="#" className="tag" style={{backgroundColor: "#e67159"}}>качество картинки</a>
			       <a href="#" className="tag" style={{backgroundColor: "#e4aedc"}}>дизайн</a>
			       <a href="#" className="tag" style={{backgroundColor: "#a7eeee"}}>качество сборки</a>
			       <a href="#" className="tag" style={{backgroundColor: "#f99c40"}}>современный</a>
			       <a href="#" className="tag" style={{backgroundColor: "#ac98d4"}}>ультратонкий</a>
			   </div>
		       </div>
		       <div className="rates-block-main-products">
			   <div className="swiper-container rates-slider">
			       <div className="swiper-wrapper">
				   <div className="swiper-slide">
				       <div className="rates-block-item">
					   <a href="#" className="rates-block-item-img">
					       <img src="/img/tonruss.jpg" alt=""/>
					       <span className="rates-item-rate">
						   <span className="rates-item-rate-top">1</span>
						   <span className="rates-item-rate-btm">4.5</span>
						   <span className="rates-item-rate-txt">Средняя оценка</span>
					       </span>
					   </a>
					   <div className="rates-block-item-title clearfix">
					       <h3>Ton</h3>
					       <span className="rates-block-item-title-rate">67 мнений</span>
					   </div>
					   <div className="rates-block-item-stat">
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#e67159", right: "2%"}}></span>
						   <span className="rates-block-item-stat-number">4.9</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#e4aedc", right: "10%"}}></span>
						   <span className="rates-block-item-stat-number">4.5</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#a7eeee", right: "20%"}}></span>
						   <span className="rates-block-item-stat-number">4</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#f99c40", right: "40%"}}></span>
						   <span className="rates-block-item-stat-number">3</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#ac98d4", right: "24%"}}></span>
						   <span className="rates-block-item-stat-number">3.8</span>
					       </div>
					   </div>
					   <a href="#" className="rates-btn btn">Смотреть оценки</a>
				       </div>
				   </div>
				   <div className="swiper-slide">
				       <div className="rates-block-item">
					   <a href="#" className="rates-block-item-img">
					       <img src="/img/spacex.jpg" alt=""/>
					       <span className="rates-item-rate">
						   <span className="rates-item-rate-top">2</span>
						   <span className="rates-item-rate-btm">4.5</span>
						   <span className="rates-item-rate-txt">Средняя оценка</span>
					       </span>
					   </a>
					   <div className="rates-block-item-title clearfix">
					       <h3>SpaceY</h3>
					       <span className="rates-block-item-title-rate">67 мнений</span>
					   </div>
					   <div className="rates-block-item-stat">
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#e67159", right: "2%"}}></span>
						   <span className="rates-block-item-stat-number">4.9</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#e4aedc", right: "10%"}}></span>
						   <span className="rates-block-item-stat-number">4.5</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#a7eeee", right: "20%"}}></span>
						   <span className="rates-block-item-stat-number">4</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#f99c40", right: "40%"}}></span>
						   <span className="rates-block-item-stat-number">3</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#ac98d4", right: "24%"}}></span>
						   <span className="rates-block-item-stat-number">3.8</span>
					       </div>
					   </div>
					   <a href="#" className="rates-btn btn">Смотреть оценки</a>
				       </div>

				   </div>
				   <div className="swiper-slide">
				       <div className="rates-block-item">
					   <a href="#" className="rates-block-item-img">
					       <img src="/img/bitcoin.jpg" alt=""/>
					       <span className="rates-item-rate">
						   <span className="rates-item-rate-top">3</span>
						   <span className="rates-item-rate-btm">4.5</span>
						   <span className="rates-item-rate-txt">Средняя оценка</span>
					       </span>
					   </a>
					   <div className="rates-block-item-title clearfix">
					       <h3>Crypton</h3>
					       <span className="rates-block-item-title-rate">67 мнений</span>
					   </div>
					   <div className="rates-block-item-stat">
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#e67159", right: "2%"}}></span>
						   <span className="rates-block-item-stat-number">4.9</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "e4aedc", right: "10%"}}></span>
						   <span className="rates-block-item-stat-number">4.5</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#a7eeee", right: "20%"}}></span>
						   <span className="rates-block-item-stat-number">4</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#f99c40", right: "40%"}}></span>
						   <span className="rates-block-item-stat-number">3</span>
					       </div>
					       <div className="rates-block-item-stat-line">
						   <span className="rates-block-item-stat-colored" style={{backgroundColor: "#ac98d4", right: "24%"}}></span>
						   <span className="rates-block-item-stat-number">3.8</span>
					       </div>
					   </div>
					   <a href="#" className="rates-btn btn">Смотреть оценки</a>
				       </div>

				   </div>
			       </div>
			   </div>
		       </div>
		       <div className="article-txt">
			   <p>Начался лишь первый день соревнований, а некоторые финалисты уже задумали заговор — сплотиться и предложить учебным заведениям готовить для них индивидуальные программы. Смысл такой: если нас много и у каждого миллион, что это мы будем ходить за вузами, пусть они за нами походят. «Амбициозная и правильная идея, — пояснил Кириенко. — Когда я услышал это, понял, что мы правильных людей выбрали в финал».
			   </p>
			   <p>Но если миллион уже вынь да положь и можно фактически услышать шуршание купюр в банкомате, то зачем эти четыре конкурсных дня? А вот зачем. Сто победителей смогут в течение года консультироваться у лучших управленцев России. Наставниками будут Герман Греф, Константин Эрнст, Сергей Собянин, Федор Бондарчук и другие. Бритва Оккама в том, что участники обретут статус победителей только тогда, когда пройдут все испытания, которые — внимание! — придумали сами наставники. Сто победителей гарантированно найдут своих учителей, но побороться за это могут все. Никто не мешает наставнику выбрать человека, который не вошел в сотню. По словам мэра Москвы Сергея Собянина, финалисты — люди с большим управленческим опытом, а не просто «ботаники, которые хорошо отвечают на тесты».</p>
			   <p><b>Мнение эксперта. Созонов Владислав — криптопрактик, коуч и соучредитель инвестиционного фонда Cryptofarm</b></p>
		       </div>
		       <div className="expert-opinion-wrap">
			   <div className="expert-opinion-block">
			       <div className="expert-opinion-item-wrap">
				   <div className="expert-opinion-item">
				       <a href="#" className="expert-opinion-item-link-block">
					   <span className="expert-opinion-item-link-img">
					       <img src="/img/tonruss.jpg" alt=""/>
					   </span>
					   <div className="expert-opinion-item-link-txt">
					       <span className="expert-opinion-item-link-title">Ton</span>
					       <div className="updates-item-main-people">
						   <span className="updates-item-main-people-img">
						       <img src="/img/user.jpg" alt=""/>
						       <img src="/img/user.jpg" alt=""/>
						       <img src="/img/user.jpg" alt=""/>
						   </span>
						   Елена, Анастасия, ***СлАдКаЯ***
					       </div>
					       <span className="expert-opinion-item-link-numbers">125 мнений / 14 мнений друзей</span>
					   </div>
				       </a>
				       <div className="expert-opinion-item-rate">
					   <span className="expert-opinion-item-rate-line" style={{backgroundColor: "#81c578", right: "36%"}}></span>
					   <span className="expert-opinion-item-rate-number">3.1</span>
					   <span className="expert-opinion-item-rate-title">монетизация</span>
				       </div>
				   </div>
				   <span className="expert-opinion-item-hint-txt">Мнения и советы опытных водителей при выборе автомобиля для активной работы </span>
			       </div>
			       <div className="expert-opinion-item-wrap">
				   <div className="expert-opinion-item">
				       <div className="expert-opinion-item-topline clearfix">
					   <div className="expert-opinion-item-author">
					       <a href="#" className="expert-opinion-item-a-img">
						   <img src="/img/user.jpg" alt=""/>
					       </a>
					       <div className="expert-opinion-item-author-txt">
						   <p>Владислав Созонов</p>
						   <span>19 оценок | Эксперт</span>
					       </div>
					   </div>
					   <div className="expert-opinion-item-author-rate" style={{backgroundColor: "#81c578"}}>4.2</div>
				       </div>
				       <div className="expert-opinion-item-txt">
					   <p>Для меня в заданиях не было чего-то нового, я их в том или ином виде уже проходил. Мне скорее понравилась схема с динамичной схемой команд: каждые несколько часов они менялись. Приходилось подстраиваться под людей разного типа личности, из разных сфер деятельности. Для меня это был главный челлендж.</p>
					   <img src="/img/article@2x.jpg" alt=""/>
					   <p>Для меня в заданиях не было чего-то нового, я их в том или ином виде уже проходил. Мне скорее понравилась схема с динамичной схемой команд: каждые несколько часов они менялись. Приходилось подстраиваться под людей разного типа личности, из разных сфер деятельности. Для меня это был главный челлендж.</p>
					   <span className="expert-opinion-item-txt-date">5 минут назад</span>
					   <div className="expert-opinion-item-txt-btm clearfix">
					       <div className="expert-opinion-item-txt-share">
						   <a href="#" className="reply-link"></a>
						   <a href="#" className="share-link"></a>
					       </div>
					       <div className="expert-opinion-item-txt-rate">
						   <span>
						       <a href="#" className="expert-opinion-item-txt-rate-minus"></a>
						       4
						   </span>
						   <span>
						       <a href="#" className="expert-opinion-item-txt-rate-plus"></a>
						       1
						   </span>
					       </div>
					   </div>
				       </div>
				   </div>
				   <span className="expert-opinion-item-hint-txt">Мнения и советы опытных водителей при выборе автомобиля для активной работы </span>
			       </div>
			       <div className="expert-opinion-item-wrap">
				   <div className="expert-opinion-item">

				       <div className="range-wrap">
					   <div className="range green-range" id="rate-range-1"></div>
					   <span className="rate-range-value" id="rate-range-value-upper"></span>
					   <span className="rate-range-title">интерфейс</span>

				       </div>
				       <div className="input-line">
					   <textarea className="comment-input" placeholder="Оставьте своё мнение"></textarea>
				       </div>
				       <div className="input-line">
					   <textarea className="comment-input" placeholder="Мнение по другому критерию"></textarea>
				       </div>
				   </div>
				   <span className="expert-opinion-item-hint-txt">Мнения и советы опытных водителей при выборе автомобиля для активной работы </span>
			       </div>
			   </div>
		       </div>
		   </div>
		   <div className="news-slider-block-m">
		       <div className="swiper-container news-slider-m">
			   <div className="swiper-wrapper">
			       <div className="swiper-slide">
				   <a href="#" data-src="#article-page" data-fancybox="" className="news-slider-item">
				       <span className="news-slider-img">
					   <img src="/img/img1@2x.png" alt=""/>
				       </span>
				       <span className="news-slider-title">Спортзалы Москвы</span>
				       <p>Hardware or software. Invention or innovation. If someone’s pushing technology forward</p>
				       <span className="news-slider-date">3 февраля</span>
				   </a>
			       </div>
			       <div className="swiper-slide">
				   <a href="#" data-src="#article-page" data-fancybox="" className="news-slider-item">
				       <span className="news-slider-img">
					   <span className="news-slider-img-wrap">
					       <span className="news-slider-img-inner">
						   <img src="/img/img2@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-2@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-3@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-4@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-5@2x.jpg" alt=""/>
					       </span>
					   </span>
				       </span>
				       <span className="news-slider-title">Транспорт для таксиста</span>
				       <p>Мнения и советы опытных водителей при выборе автомобиля для активной работы …</p>
				       <span className="news-slider-date">3 февраля</span>
				   </a>
			       </div>
			       <div className="swiper-slide">
				   <a href="#" data-src="#article-page" data-fancybox="" className="news-slider-item news-slider-item-video">
				       <span className="news-slider-img">
					   <img src="/img/interior.png" alt=""/>
					   <span className="play-btn"></span>
				       </span>
				       <span className="news-slider-item-txt">
					   <span className="news-slider-title">Выпуск #12: слепой выбор</span>
					   <span className="news-slider-date">3 февраля</span>
				       </span>
				   </a>
			       </div>
			       <div className="swiper-slide">
				   <a href="#" data-src="#article-page" data-fancybox="" className="news-slider-item">
				       <span className="news-slider-img">
					   <img src="/img/img1@2x.png" alt=""/>
				       </span>
				       <span className="news-slider-title">Спортзалы Москвы</span>
				       <p>Hardware or software. Invention or innovation. If someone’s pushing technology forward</p>
				       <span className="news-slider-date">3 февраля</span>
				   </a>
			       </div>
			       <div className="swiper-slide">
				   <a href="#" data-src="#article-page" data-fancybox="" className="news-slider-item">
				       <span className="news-slider-img">
					   <span className="news-slider-img-wrap">
					       <span className="news-slider-img-inner">
						   <img src="/img/img2@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-2@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-3@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-4@2x.jpg" alt=""/>
					       </span>
					       <span className="news-slider-img-inner">
						   <img src="/img/img2-5@2x.jpg" alt=""/>
					       </span>
					   </span>
				       </span>
				       <span className="news-slider-title">Транспорт для таксиста</span>
				       <p>Мнения и советы опытных водителей при выборе автомобиля для активной работы …</p>
				       <span className="news-slider-date">3 февраля</span>
				   </a>
			       </div>
			       <div className="swiper-slide">
				   <a href="#" data-src="#article-page" data-fancybox="" className="news-slider-item news-slider-item-video">
				       <span className="news-slider-img">
					   <img src="/img/interior.png" alt=""/>
					   <span className="play-btn"></span>
				       </span>
				       <span className="news-slider-item-txt">
					   <span className="news-slider-title">Выпуск #12: слепой выбор</span>
					   <span className="news-slider-date">3 февраля</span>
				       </span>
				   </a>
			       </div>
			   </div>

			   <div className="swiper-button-next swiper-button-white"></div>
			   <div className="swiper-button-prev swiper-button-white"></div>
		       </div>
		   </div>
		   <a href="#" className="all-link btn">Все посты</a>
	     </div>
	</Popup>
    );
};

export default PopupPost;