import React from "react";
import "./style.css";

export function CardImage(props) {
  return ( 
   
    <img img className="card-img-top" src={props.img} alt="profile">
     <label>
     {props.label}
    </label>
    </img>
  
  );
}

export function CardHeader(props) {
  return ( 
    <div className="card-body">
     <h5 className="card-title">{props.title}</h5>
     <p className="card-text">{props.body}</p>
   </div>
  
  );
}

export function UlList(props) {
  return ( 
    <ul className="list-group list-group-flush">
      <li className="list-group-item">Education: {props.item1}</li>
      <li className="list-group-item">Certifications: {props.item2}</li>
  </ul>
  );
}

export function CardBody(props) {
  return ( 
    <div className="card-body">
   <a href={props.link1} className="card-link">GitHub</a>
   <a href={props.link2} className="card-link">linkedin</a>
  </div>
  );
}

