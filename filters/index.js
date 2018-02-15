import React, { Component } from 'react';
import './filters.scss';

class Filters extends Component {
    
    constructor(props) {
	super(props);

	this.state = {
	    //isEditable: false,
	};
	
    }
    
    componentDidMount() {


    }

    render() {
	let filters  = this.props.filters;

	return (
	    <div className="filters-popup">
		<div className="close icons_close js-filters-close close-hide"></div>
		<div className="filters">

		    <For each="property" index="key" of={filters.price}>
			<div key={key} className="filters_group range_filter" data-name={property.name} data-id={property.id} >
			    <p>{ property.label }</p>
			    <input id="to" readOnly type="text" />
			    <input id="from" readOnly type="text" />
			</div>
		    </For>

		    <For each="property" index="key" of={filters.enum}>
			<select key={key} className="enum_filter" name={property.name} data-id={property.id} >
			    <option value={property.name}>{property.label}</option>
			    <For each="item" of={property.items}>
				<option value={item.name}>{item.label}</option>
			    </For>
			</select>
		    </For>

		    <For each="property" index="key" of={filters.multiEnum}>
			<select key={key} className="enum_filter" name={property.name} data-id={property.id} >
			    <option value={property.name}>{property.label}</option>
			    <For each="item" of={property.items}>
				<option value={item.name}>{item.label}</option>
			    </For>
			</select>
		    </For>

		    <For each="property" index="key" of={filters.range}>
			<div key={key} className="filters_group range_filter" data-name={property.name} data-id={property.id} >
			    <p>{ property.label }</p>
			    <input id="to" readOnly type="text" />
			    <div id="filter-range" data-from={property.min}  data-to={property.max}  data-sign={property.sign}></div>
			    <input id="from" readOnly type="text" />
			</div>
		    </For>

		    <For each="property" index="key" of={filters.bool}>
			<div key={key} className={`filters_group bool_filter`} data-name={property.name} data-id={property.id} >
			    <label for={property.id}>{property.label}</label>
			    <select key={key} className="" name={property.name} data-id={property.id} >
				<option value="auto">Авто</option>
				<option value="1">Да</option>
				<option value="0">Нет</option>
			    </select>

			</div>
		    </For>

		</div>

		<div className="filters-popup__footer">
		    <div className="button button_grey inline js-set-filters">Применить</div>
		</div>

	    </div>
	);	
    }

};

export default Filters;