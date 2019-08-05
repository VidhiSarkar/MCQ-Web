import * as actionTypes from  './actionTypes';
import axios from '../../../axios-base'

export const initQuestions = (questions) => {
	return{
		type : actionTypes.INIT_QUESTIONS,
		questions
	}
}

export const getQuestions = (questions) => {
	return{
		type : actionTypes.GET_QUESTIONS,
		questions		
	}
}

export const getResults = (results) => {
	return{
		type : actionTypes.GET_RESULTS,
		results		
	}
}

export const getNextQuestion = () => {
	return{
		type : actionTypes.NEXT				
	}
}

export const getPreviousQuestion = () => {
	return{
		type : actionTypes.PREVIOUS				
	}
}

export const fetchQuestionsFailed = (error) => {
	return{
		type : actionTypes.FETCH_QUESTIONS_FAILED,
		error
	}
}

export const submitQuestions =(questions)=>{
	return { 
		type : 'SUBMIT',
		questions

	}
}

export const getAllMcqQuestions = () => {
	return dispatch =>{
		axios.get("mcq")		
		.then(response =>{
			dispatch(getQuestions(response.data))
		})
	}

}
export const getcurrentPreviousQuestion = () =>{	
	return dispatch => {
		dispatch(getPreviousQuestion())
	}
}
export const getcurrentNextQuestion = () =>{	
	return dispatch => {
		dispatch(getNextQuestion())
	}
}

export const submittedAllQuestions = (questions) => { 
  return dispatch => {    
    const config ={
    	header:{
      		'Content-Type': 'application/json',
    	}
    };    
    axios.post("results",questions,config)
    .then(resp => { return resp.data();})
      .catch( err => {
        dispatch(submitQuestions(questions));
      } );
  };
};

export const getAllMcqResults = () => {
	return dispatch =>{
		axios.get("results")		
		.then(response =>{
			const key = Object.keys(response.data).length - 1;
			const results = response.data[key] && response.data[key];
			if(results){
				delete results.id;
				dispatch(getResults(response.data[key]));
			}
		})
	}

}

