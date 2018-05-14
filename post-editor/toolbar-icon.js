import React from 'react';
import classnames from 'classnames';

export default ({ label, icon, active, onToggle, style }) => (
    <div className={`pet-icons__item pet-${style} ${classnames({ active })}`} onMouseDown={(e) => {
	  e.preventDefault();
	  onToggle(style)
	}}>
	{label ? label : <i className={icon}></i>}
    </div>
);
