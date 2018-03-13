import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PopupAuth from 'components/popup-auth';


const Header = (props) => {

    return (
	<header>
	    <div className="container clearfix">
		<div className="head-search">
		    <input type="search" className="search-inp" placeholder="Самый качественный автомобиль" />
		    <input type="submit" className="btn search-btn" />
		</div>
		<div className="right-head">
		   <button className="menu-pull"></button>
		    <div className="navigation-head">
			<nav>
			    <ul>
				<li><a href="#">О компании</a></li>
				<li><a href="#">Как это работает?</a></li>
				<li><a href="#">Контакты</a></li>
				<li><a href="#">Скачать приложение</a></li>
			    </ul>
			</nav>
		    </div>
		    <a onClick={props.openLogin} href="#" className="btn white-btn">Вход</a>
		</div>
	    </div>
	</header>
    ); 
};

export default Header;