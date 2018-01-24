import React, { Component } from 'react'
import './basket.scss';


class CriteriaBasket extends Component {

    constructor(props) {
	super(props);
	
	this.state = {
	    params: {}
	};
    }
    
    onClick(id) {
	this.setState({params: {}});
	this.props.onClick(id);
    }
    
    
    render() {
	return (
	    <div>
		<For each='criterion' index='index' of={this.props.criteria}>
		    <div onClick={() => this.onClick(criterion.id)}>{criterion.label}</div>
		</For>
	    </div>
	);
    }
}

export default CriteriaBasket;