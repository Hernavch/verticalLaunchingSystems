import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import {CardImage, CardBody, CardHeader, UlList} from "../components/FullCard";
import Card from "../components/Card";
import API from "../utils/API";
import UserContext from '../utils/UserContext';
import { Col, Row, Container } from "../components/Grid";



class Users extends Component {
  state = {
    username:"",
     };
componentDidMount(){
  
}
  

  render() {


    return (
      <UserContext.Consumer>
      {({user}) => (
       
     
       <Container fluid>
         
        <Row>
        {user ?(
           <Col size="md-12 sm-12">
          
           <Card> 
             <h1> Welcome {user.name} </h1>
           </Card>
            
             
            </Col>
                
        ):(
          <Col size="md-12 sm-12">
          <Jumbotron> 
            <h1> Please Login </h1>
          </Jumbotron>

        <h3>No Results to display</h3>
        </Col>
        )}
        </Row>
      </Container>
      )}

      </UserContext.Consumer>
    );
  }
}

export default Users;
