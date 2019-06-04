import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {CardImage, CardBody, CardHeader, UlList, CardHeaderBasic} from "../components/FullCard";
import Card from "../components/Card";
import API from "../utils/API";
import UserContext from '../utils/UserContext';
import { Col, Row, Container, UserContainer } from "../components/Grid";
import { FormBtn } from "../components/Form";



class Users extends Component {
  state = {
    username:"",
    image:"https://dcp.org/wp-content/uploads/2018/11/person-placeholder-e1543539209738.jpg",
    item1: "Student",
    item2: "Bachelors",
    item3:"CPR"

  };
componentDidMount(){
  
}
  

  render() {


    return (
      <UserContext.Consumer>
      {({user}) => (
       
     
       <UserContainer fluid>
         
        
        {user ?(
          <Row>
           <Col size="md-4 sm-12">
              <Card> 
               <h1> Welcome {user.name} </h1>
               <CardImage
                 image={this.state.image}
               />
               <CardHeader
               title= {user.username}
               />
                <CardBody/>
              </Card>
           <br/>
              <UlList
                item1= {this.state.item1}
                item2= {this.state.item2}
                item3= {this.state.item3}>
              </UlList>
            <br/>
             

            
                    
            </Col>
            <Col size="md-4 sm-12" >
              <Card>
              <h1>Hi Hi</h1>
              </Card>
              
            </Col>
            <Col size="md-4 sm-12" >
            <Card>
              <h1>Hi Hi</h1>
              </Card>
            </Col>
        </Row>    
        ):(
          <Col size="md-8 sm-12">
          <Jumbotron> 
            <Link to="/login" className="banner-jumbo">
               <FormBtn>
                  <h5>Already a user?</h5>
                    <h6>Login</h6>
                </FormBtn>
            </Link>
                <br/>
            <Link to="/signup" className="banner-jumbo">
              <FormBtn>
                  <h5>New to VLS?</h5>
                    <h6>Sign Up</h6>
              </FormBtn>
            </Link>
          </Jumbotron>
        </Col>
        )}
        
      </UserContainer>
      )}

      </UserContext.Consumer>
    );
  }
}

export default Users;
