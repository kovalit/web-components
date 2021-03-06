import React, {Component} from 'react';
import ReactDOM  from 'react-dom';

//modules
import api from 'api';
import request from 'request';
import helpers from 'helpers';


// components
import CriterionCheckbox from 'components/criterion-checkbox';
import CriterionBar from 'components/criterion-bar';
import CriterionBasket from 'components/criterion-basket';
import Popup from 'components/popup';


class LandingRating extends Component {
    
    constructor(props) {
	super(props);
	
	this.state = {
	    isClient: typeof window != 'undefined' && window.document,
	    objects: [],
	    criteria: [],
	    selectedCriteria: [],
	};
	
    }

    componentWillReceiveProps(props){
	let list = props.criteria.filter(item => item.active).map(item=>item.id).join(",");
	
	if (list !== "") {
	    request(api.entities.findAll, {sphereId: "auto", criteria: list, limit: 3})
		.then(body => {
		    		   
		    this.setState({
			    objects: body.entities,
			    criteria: props.criteria
			});
		});
	}
    }
    
   sort (avgScores) {
       return avgScores.sort((a,b) => {
	    return a.criteriaId - b.criteriaId;
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
			    <If condition={this.props.sphere}>	    
				<div className="rates-block-main-top clearfix">
				    <div className="rates-block-title">
					    <h2>{this.props.sphere.label}</h2>
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
			    </If>
			    
			    
			    <div className="rates-block-main-filter">
				<h4>Популярные критерии</h4>
				<div className="rates-block-main-filter-colored">
				    <For each="criterion" index="index" of={this.props.criteria}>
					<CriterionCheckbox 
					    key={index}
					    color={criterion.color}
					    criterion={criterion} 
					    onClick={()=>this.props.onCriterionClick(criterion.id)}
					    active={criterion.active} 
					    size={32} />
				    </For>
				</div>
				<div className="rates-block-main-filter-btm">
				    <div onClick={this.props.openCriteriaBasket} className="tag2 tag2-last">Другие критерии</div>
				</div>
			    </div>
			    <div className="rates-block-main-products">
				<div className="swiper-container rates-slider">
				    <div className="swiper-wrapper">
				    
					<For each="object" index="index" of={this.state.objects}>
					<div key={index} className="swiper-slide">
					    <div className="rates-block-item">
						<a href="#" className="rates-block-item-img">
						    <img src={helpers.imgUrl(object.mainImage, "auto-400")} alt=""/>
						    
						    <span className="rates-item-rate">
							<span className="rates-item-rate-top">{index + 1}</span>
							<span className="rates-item-rate-btm">{(object.avg * 5).toFixed(1)}</span>
							<span className="rates-item-rate-txt">Средняя оценка</span>
						    </span>
						</a>
						<div className="rates-block-item-title clearfix">
						    <h3>{object.label}</h3>
						    <span className="rates-block-item-title-rate">{object.votes}</span>
						</div>
						<div className="rates-block-item-stat">
						
						    <For each="item" index="index" of={this.sort(object.avgScores)}>
							<CriterionBar
							    key={index}
							    id={item.criteriaId}
							    title=""
							    score={item.value}
							    size={12} />
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

export default LandingRating;


