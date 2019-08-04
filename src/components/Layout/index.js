import React from 'react';
import './style.css';

const Layout = (props) => {
 return(
 	<div>
	 	<div className="app-bar">Multiple Choice Question Test</div>
	 	<div className="main-container">{props.children}</div>	 	
 	</div>
 	)
}

export default Layout;