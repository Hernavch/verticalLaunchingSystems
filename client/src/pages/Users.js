import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {CardImage, CardBody, CardHeader, UlList} from "../components/FullCard";
import Card from "../components/Card";
import API from "../utils/API";
import UserContext from '../utils/UserContext';
import { Col, Row, Container, UserContainer } from "../components/Grid";
import { FormBtn } from "../components/Form";



class Users extends Component {
  state = {
    username:"",
    image:"https://dcp.org/wp-content/uploads/2018/11/person-placeholder-e1543539209738.jpg"
     };
componentDidMount(){
  
}
  

  render() {


    return (
      <UserContext.Consumer>
      {({user}) => (
       
     
       <UserContainer fluid>
         
        <Row>
        {user ?(
           <Col size="md-12 sm-12">
          
           <Card> 
             <h1> Welcome {user.name} </h1>
             <CardImage
             image={this.state.image}
             />
             <CardHeader
               title= {user.username}
             />
           </Card>
            
             
            </Col>
                
        ):(
          <Col size="md-12 sm-12">
          <Jumbotron> 
            <FormBtn>
              <Link to="/login" className="banner-jumbo">←Login</Link>
              </FormBtn>
          </Jumbotron>

        <h3>No Results to display</h3>
        </Col>
        )}
        </Row>
      </UserContainer>
      )}

      </UserContext.Consumer>
    );
  }
}

export default Users;
