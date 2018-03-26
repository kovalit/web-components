import React, { Component } from 'react';
import './sidebar-spheres.scss';


const SidebarSpheres = (props) => { 
    return (
	<div className="sidebar-spheres">
	    <div className="sidebar-spheres-page">
		<For each="sphere" index="index" of={props.spheres}>
		    <a key={index} href={`/main/${sphere.name}/rating`} className="sidebar-spheres__item">
			<div className="table-cell name">{sphere.label}</div>
			<div className="table-cell count">
			    <span className="badge"></span>
			</div>
			<div className="table-cell mycount"></div>
		    </a>
		</For>
	    </div>
	</div>
    );
};

export default SidebarSpheres;