import * as actionTypes from '../actions/actionTypes';

const initialState = {
	initialQuestion:[],
	questions:[],
	loading:false,
	error:false,
	currentPosition : 0,
	results : [],
	mcqResults : ''
}

const getQuestions =(state,action)=>{
	return {
		...state,questions:action.questions, initialQuestion:action.questions[0]
	}
}

const getResults =(state,action)=>{
	return {
		...state,mcqResults:action.results
	}
}

const fetchQuestionsFailed =(state,action)=>{
	return {
		...state,error:action.error
	}
}

const nextQuestion = (state,action) =>{
	return {
		...state,currentPosition: state.currentPosition + 1
	}
}

const previousQuestion = (state,action) =>{
	return {
		...state,currentPosition:state.currentPosition - 1 
	}
}
const submitQuestion = (state,action) =>{
	return {
		...state,results:state.results 
	}
}
const reducer = (state=initialState,action)=>{
	switch(action.type){
		case actionTypes.GET_QUESTIONS:
		 	return getQuestions(state,action);
		case actionTypes.FETCH_QUESTIONS_FAILED:
		 	return fetchQuestionsFailed(state,action);
		case actionTypes.NEXT:
		 	return nextQuestion(state,action);
		case actionTypes.PREVIOUS:
		 	return previousQuestion(state,action);
		case actionTypes.SUBMIT:
		 	return submitQuestion(state,action);
		case actionTypes.GET_RESULTS:
		 	return getResults(state,action);
		default:
		return state
	}
}

export default reducer;