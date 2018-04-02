import React, { Component } from 'react';
import './criteria-basket.scss';

import CriterionCheckbox from 'components/criterion-checkbox';

 class CriteriaBasket extends Component {

    constructor(props) {
        super(props);
  
	this.shortWidth= 24;
	this.offset = 8;
	this.max = 0;
	this.state = {
	    maxWidth: 1024
	};
	
	this.calcSize = this.calcSize.bind(this);
	
    }
    
    calcSize(array, max, lastIndex, reserve){
	var sum = 0;
	for(var i = 0, length = array.length; i < length;i++) {
	    if (i === 0 && array[i].width > max ) {
		array[i].width = length === 1 ? max - this.offset : max - this.shortWidth - 2 * this.offset;
		array.splice(1);
		break;
	    }
	    sum += array[i].width + this.offset;

	}
	sum += reserve;

	if(sum > max) {
	    if (lastIndex > 0) {
		array[lastIndex].width = this.shortWidth;
		array[lastIndex].view = "short";
		this.calcSize(array, max, lastIndex - 1, reserve);
	    } 
	    else if (length > 1) {
		array.pop();
		reserve = this.shortWidth + this.offset;
		this.calcSize(array, max, lastIndex - 2, reserve);
	    }
	    else {
		array[0].width = max - this.shortWidth - this.offset - this.offset;
	    }
	} 
    }
    
    getMaxWidth() {	
	return $("#mainbar-header").outerWidth() 
		- $("#mainbar-header-right").position().left 
		- $("#mainbar-header-right").outerWidth() 
		+ $("#criteria-basket-main").outerWidth();
	
	
    }
    
    componentDidMount() {
	setTimeout(()=>{
	   this.setState({
		maxWidth: this.getMaxWidth()
	    }) 
	}, 2000) 
	
	
    }
    

    render() {

	let {onClick, visible, criteria} = this.props;
	
	if (!visible) {
	    return null;
	}

	if (criteria.length === 0) {
	     return null;
	}
	

	const lengthBefore = criteria.length;
	for (var i in criteria) {
	    let div = document.createElement("div");
	    div.style.visibility = "hidden";
	    div.innerHTML = criteria[i].label;
	    div.className = "criterion criterion24";
	    document.body.appendChild(div);
	    criteria[i].width = div.offsetWidth + 1;
	    criteria[i].view = "full";
	    div.remove();    
	}
	
	
	this.calcSize(criteria, this.state.maxWidth, lengthBefore - 1, 0);

     
	return (
	    <div className="criteria-basket" onClick={ onClick }>
		<div className="criteria-basket-title">Критерии:</div>
		<div className="criteria-basket-main" id="criteria-basket-main">
		    <For each="criterion" index="index" of={ criteria }>

			<CriterionCheckbox 
			    key={index} 
			    width={criterion.width}
			    short={criterion.view==="short"}
			    color={criterion.color} 
			    active={true} 
			    criterion={criterion} />
		    </For>
		</div>
		<div className="criteria-select"></div>
	    </div>
	);
    }
};

export default CriteriaBasket;