import React from 'react';
 

const McqList = (props) =>{	
	return(
		<div>
			<li>
				<input type='radio' className ="option-button"
					name = 'opt-questions' value={props.questionOption} 
					checked = {						
					 	props.checked == props.questionOption 
						|| props.selectedOption
						  === props.questionOption
						 ? 'checked' : '' 
						  }

					onChange = {(e)=>props.changeHandler(e,props.currentOption)}/>
					{props.questionOption}
			</li>
		</div>
	)
}

export default McqList