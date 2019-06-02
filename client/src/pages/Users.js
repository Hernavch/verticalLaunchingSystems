import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import FullCard from "../components/FullCard";
import Card from "../components/Card";
import API from "../utils/API";
import UserContext from '../utils/UserContext';
import { Col, Row, Container } from "../components/Grid";



class Users extends Component {
  state = {
    username:"",
     };
componentDidMount(){
  // you will grab the token from localStorage
  // and validate that token using your API
  // once it is valided, it will send back user MediaDeviceInfo
  // and store that user info with SETSTATE 

  // API.validate(token)
  // .then(res=>{
  //   console.log("validated")
  // })
}
  

  render() {


    return (
      <UserContext.Consumer>
      {({onLogin}) => (

      <Container fluid>
        <Row>
          <Col size="md-8 sm-12">
          <Jumbotron>
            <FullCard size="md-4 sm-12"
            />
            
              </Jumbotron>
           </Col>
          <Col size="md-4 sm-12">
            <Card> 
              <h1> I am a card </h1>
            </Card>

          <h3>No Results to display</h3>
          </Col>
        </Row>
      </Container>
      )}

      </UserContext.Consumer>
    );
  }
}

export default Users;
