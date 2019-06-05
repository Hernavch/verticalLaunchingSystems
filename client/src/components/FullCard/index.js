import React from "react";
import DeleteBtn from "../DeleteBtn";
import CheckBtn from "../CheckBtn";
import { Link } from "react-router-dom";

import "./style.css";

export function CardImage(props) {
  return ( 
   
    <img className="card-img-top img-fluid profilepic" src={props.image} alt="profile"/>
  
  );
}

export function CardHeader(props) {
  return ( 
    <div className="card-body">
     <h5 className="card-title titleCard">{props.title}</h5>
     <h4 className="card-title titleCard">{props.title1}</h4>
     <h3 className="card-title titleCard">{props.title2}</h3>
     <a href={props.Url} className="card-link">{props.Url}</a>

     <h3 className="card-title titleCard">{props.title3}</h3>

     <p className="card-text">{props.body}</p>
   </div>
  
  );
}
export function CardHeaderBasic(props) {
  return ( 
    <div className="card-body">
     <h5 className="card-title titleCard">{props.title}</h5>
     <p className="card-text">{props.body}</p>
   </div>
  
  );
}

export function UlListBasic(props) {
  return ( 
    <ul className="list-group list-group-flush">
       <li className="list-group-item "> {props.item1}
       <CheckBtn/></li>
      <li className="list-group-item"> {props.item2}
      <CheckBtn/></li>
      <li className="list-group-item ">{props.item3}
      <CheckBtn/></li>
  </ul>
  );
}
export function UlList(props) {
  return ( 
    <ul className="list-group list-group-flush">
       <li className="list-group-item titleCard ">Status: {props.item1}</li>
      <li className="list-group-item titleCard">Education: {props.item2}</li>
      <li className="list-group-item titleCard">Certifications: {props.item3}</li>
  </ul>
  );
}
export function UlListSkill(props) {
  return ( 
    <ul className="list-group list-group-flush">
       <li className="list-group-item titleCard ">Skill: {props.skill1}</li>
      <li className="list-group-item titleCard">Skill: {props.skill2}</li>
      <li className="list-group-item titleCard">Skill: {props.skill3}</li>
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
