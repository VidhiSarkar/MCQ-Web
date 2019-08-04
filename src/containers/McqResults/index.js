import React,{Component} from 'react';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
import './style.css';

class McqResullt extends Component{
	
	componentDidMount(){
		const {getAllResults} = this.props;
		getAllResults();
	}

	render(){		
		const {results} = this.props;		
		const resultListing = results && Object.keys(results).map((key)=>{
			return(				
					<ul> 
						<li>Q-{results[key].question}</li>
						<li>Answer - {results[key].answer}</li>
					</ul>			
			)
		})
		return(
			<div>
				<h1>Test Result</h1>
				{resultListing}
			</div>
		)
	}
}

const mapStateToProps = state =>{	
	return{
		results : state.mcq.mcqResults		
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		getAllResults : ()=>dispatch(actions.getAllMcqResults()),
		
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(McqResullt);