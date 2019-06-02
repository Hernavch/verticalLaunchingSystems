import React from "react";
import "./style.css";

function Fullcard(props) {
  return (
    <div className="card" id="fullCard" >
  
    <img className="card-img-top" src={props.img} alt="profile"></img>
     <div className="card-body">
     <h5 className="card-title">{props.username}Username1</h5>
     <p className="card-text">{props.status}</p>
   </div>
   <ul className="list-group list-group-flush">
      <li className="list-group-item">Education: {props.education}</li>
      <li className="list-group-item">Certifications: {props.certifications}</li>
  </ul>
 <div className="card-body">
   <a href={props.github} className="card-link">GitHub</a>
   <a href={props.linkedin} className="card-link">linkedin</a>
  </div>
 </div>
    
  );
}

export default Fullcard;


