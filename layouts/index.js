import React from 'react';

import HeaderUser from './header-user';
import HeaderNav from './header-nav';

const Layout = (props) => {

    return (
	 <div>
	    <div className="header" id="mainbar-header">
		<div className="sidebar-logo"></div>
		<HeaderNav page={props.page} />
		<HeaderUser user={props.me} />
	    </div>

	    <div className="content">
		<div className="sidebar sidebar_left">
		    {props.sidebar}
		</div>

		<div className="mainbar">
		    {props.children}
		</div>
	    </div>	
	</div>
		    
    ); 
};

export default Layout;