import React from 'react';
import McqQuestions from './containers/McqQuestions';
import McqResults from './containers/McqResults';
import {Route,Switch,withRouter,Redirect} from  'react-router-dom';
import Layout from './components/Layout';

const App =()=> {
	const routes = (
		<Switch>
			<Route path ="/" exact component ={ McqQuestions }/>
			<Route path ="/results" component ={ McqResults }/>
			<Redirect to="/" />
		</Switch>
	);
	return(		
		 <Layout>
		 	{routes}
		 </Layout>
		
	)    
};

export default withRouter( App );
