import React,{Component} from 'react';
import * as actions from '../../store/actions';
import McqList from '../../components/McqList';
import {connect} from 'react-redux';
import './style.css';

class McqQuestions extends Component{

	state= {
		checked: '',
		selectedOptions:{},
		result:[]
	}

	componentDidMount(){
		const {getAllQuestions} = this.props;
		getAllQuestions();
	}
	
	onChangePreviousHandler = () =>{
			const {currentPreviousQuestion} = this.props;
			currentPreviousQuestion();		
	}

	onChangeNextHandler = (questNo) =>{
			debugger;						
			if(!this.state.result[questNo])
				{ 	
					alert("Please select answer ")
					return false;
				}
			this.props.currentNextQuestion();			
	}

	checkedQuestionsHandler = (e,objQuestion) =>{
		const data = [];
		const setResult = [];
		data[objQuestion.id] = e.target.value;
		setResult[objQuestion.id] = {
			'questionId': objQuestion.id,
			'question': objQuestion.question,
			'answer': e.target.value
		};
		const result = {...this.state.result,...setResult};
		const selectedOptions = { ...this.state.selectedOptions,...data};
		this.setState({checked: e.target.value,selectedOptions,result});
	}

	submitHandler = () =>{
		const {submitQuestions, history} = this.props;
		const {result} = this.state;
		submitQuestions(result);
		history.push('/results');
	}

	render(){	
	
		const {questions, currentPosition,results} = this.props;
		const {checked,selectedOptions} = this.state;		

		let initQuestion = [];
		let options =[];
		let questionOptions =[];
		let questNo = '';
		const lastQuestion = parseInt(currentPosition + 1) === questions.length;

		if(questions.length > 0){
			initQuestion = questions[currentPosition].question;
			questionOptions = questions[currentPosition].options;
			questNo = questions[currentPosition].id;

			options = Object.keys(questionOptions).map(index =>(
							 <McqList questionOption = {questionOptions[index]} 
							 			selectedOption = {selectedOptions[questNo]}
							 			checked = {checked}
							 			currentOption = {questions[currentPosition]}
							 			changeHandler = {this.checkedQuestionsHandler}
							 />
							)
						)};			
		return(

			<div>
				<div> 
					<div className="mcq-question">Q-{questNo} - {initQuestion}</div>					
					<div id="options" className="mcqlist">{options}</div>
					<div className ="button-wrapper">						
								<input disabled = {currentPosition === 0 ? 'disabled':''} type="button" className= "button" value="Previous" onClick={() =>this.onChangePreviousHandler()}/>
								{ !lastQuestion ?
								 <input type="button" className= "button"  value="Next"
								  onClick= {() =>this.onChangeNextHandler(questNo)}/>
								 : <input type="button" className= "button" value="Submit" onClick= {() =>this.submitHandler()}/>}
					</div>
					</div> 
				</div>
		)
	}
}

const mapStateToProps = state =>{	
	return{
		questions : state.mcq.questions,
		error : state.mcq.error,
		currentPosition : state.mcq.currentPosition,
		results : state.mcq.results
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		getAllQuestions : ()=>dispatch(actions.getAllMcqQuestions()),
		currentPreviousQuestion: ()=>dispatch(actions.getcurrentPreviousQuestion()),
		currentNextQuestion: ()=> dispatch(actions.getcurrentNextQuestion()),
		checkboxHandler : ()=>dispatch(actions.checkboxQuestionsChange()),
		submitQuestions : (submittedQuestions)=>dispatch(actions.submittedAllQuestions(submittedQuestions))

	}
}
export default connect(mapStateToProps,mapDispatchToProps)(McqQuestions);


