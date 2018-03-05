import React, {Component} from 'react';


class Header extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    isClient: typeof window != 'undefined' && window.document,
	    criteria: [],
	    objects: [],
	    selectedCriteria: [],
	};
    }
    
    componentDidMount() {
	fetch('http://whatsbetter.me/api/spheres/pda/criteria?limit=8')
	    .then(res => res.json())
	    .then(body => {
		
		let selected = body.data.splice(0,4)
		this.setState({
		    criteria: body.data,
		    selectedCriteria: selected,
		});
		
		let criteria = selected.map(item=>item.id).join(",");
		console.log('http://whatsbetter.me/api/spheres/pda/objects?limit=3&criteria=' + criteria)
		return fetch('http://whatsbetter.me/api/spheres/pda/objects?limit=3&criteria=' + criteria)
	    })
	    .then(res => res.json())
	    .then(body => {
		this.setState({
		    objects: body.data
		});
	    });
    }
    
    
    render() {
	if (!this.state.isClient) {
	    return null;
	}
    
	return (
	    <div className="rates-block">
		    <div className="container">
			<div className="rates-block-top narrow-block clearfix">
			    <h2>Сферы рейтингов</h2>
			    <a href="#" className="choose-link btn">Выбрать сферу</a>
			</div>
			<div className="rates-block-main narrow-block">
			    <div className="rates-block-main-top clearfix">
				<div className="rates-block-title">
				    <h2>Смартфоны</h2>
				    <a href="#" className="rates-share"><img src="img/share-symbol.svg" alt=""/></a>
				</div>
				<div className="rates-top-right">
				    <div className="rates-search">
					<input type="search" className="search-inp" placeholder="Поиск по 214 объектам" />
					<input type="submit" className="btn search-btn" />
				    </div>
				    <div className="rates-select">
					<a href="#" className="rates-select-link">Все 41 245 мнений</a>
				    </div>
				    <div className="rates-menu">
					<a href="#" className="rates-menu-pull"><img src="img/menu-2.svg" alt=""/></a>
				    </div>
				</div>
			    </div>
			    <div className="rates-block-main-filter">
				<h4>Популярные критерии</h4>
				<div className="rates-block-main-filter-colored">
				    <For each="criterion" index="index" of={this.state.selectedCriteria}>
					<a key={index} href="#" className="tag" style={{backgroundColor: "#e67159"}}>{criterion.label}</a>
				    </For>
				</div>
				<div className="rates-block-main-filter-btm">
				    <a href="#" className="tag2">надежность</a>
				    <a href="#" className="tag2">универсальность</a>
				    <a href="#" className="tag2">приятный на ощупь</a>
				    <a href="#" className="tag2">современный дизайн</a>
				    <a href="#" className="tag2 tag2-last">Другие критерии</a>
				</div>
			    </div>
			    <div className="rates-block-main-products">
				<div className="swiper-container rates-slider">
				    <div className="swiper-wrapper">
				    
					<For each="object" index="index" of={this.state.objects}>
					<div className="swiper-slide">
					    <div className="rates-block-item">
						<a href="#" className="rates-block-item-img">
						    <img src="/img/phone@2x.png" alt=""/>
						    <span className="rates-item-rate">
							<span className="rates-item-rate-top">{object.n + 1}</span>
							<span className="rates-item-rate-btm">{(object.score * 5).toFixed(1)}</span>
							<span className="rates-item-rate-txt">Средняя оценка</span>
						    </span>
						</a>
						<div className="rates-block-item-title clearfix">
						    <h3>{object.label}</h3>
						    <span className="rates-block-item-title-rate">67 мнений</span>
						</div>
						<div className="rates-block-item-stat">
						    <For each="key" index="index" of={Object.keys(object.criteria)}>
							<div className="rates-block-item-stat-line">
							    <span className="rates-block-item-stat-colored" style={{backgroundColor: "#e67159", right: "2%"}}></span>
							    <span className="rates-block-item-stat-number">{(object.criteria[key].score * 5).toFixed()}</span>
							</div>
						    </For>
						    
						    
						</div>
						<a href="#" className="rates-btn btn">Смотреть оценки</a>
					    </div>
					</div>
					 </For>
					
					<div className="swiper-slide">
					    <div className="rates-block-item rates-block-item-more">
						<a href="#" className="rates-block-item-more-img">
						    <img src="/img/smartphones@2x.png" alt=""/>
						    <span className="rates-block-item-more-txt">Все смартфоны</span>
						</a>
					    </div>
					</div>
				    </div>
				</div>


			    </div>
			</div>
		    </div>
		</div>
	);
    }
};

export default Header;


