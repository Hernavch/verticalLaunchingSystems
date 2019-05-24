import React from "react";
// import { Button, Dropdown} from 'reactstrap';

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return ( 
   
    <div className="form-group ">
     <label>
     {props.label}
    </label>

      <input className="form-control" {...props} />

    </div>
  
  );
}

export function TextArea(props) {
  return (
   
    <div className="form-group ">
      <textarea className="form-control" rows="20" {...props} />
    
    </div>
   
  );
}

export function FormBtn(props) {
  return (
    <button {...props} className="btn btn-success btn-lg btn-block">
      {props.children}
    </button>
  );
}

export function RadioBtn(props) {
  return (  
    <div className="form-check">
        <input type="radio" {...props}/>
        <label>{props.label} </label>
    </div>
 
  );

}

export function Selectbtn(props){
  return(
    <div className="form-select">
       <label>{props.label} </label>
       <br/>
    <select >
    <option >{props.optionOne}</option>
    <option> {props.optionTwo}</option>
    <option >{props.optionThree}</option>
    <option> {props.optionFour}</option>
   
  </select>
  </div>
  )
}
