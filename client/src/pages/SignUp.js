import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import { Input, TextArea, FormBtn, FormTitle } from "../components/Form";
import API from "../utils/API";
import UserContext from '../utils/UserContext';

class SignUp extends Component {
  state = {
    firstName:'',
    lastName:'',
    username:'',
    email:'',
    password:'',
     
  };
  handleSignup = (event, res) => {
    event.preventDefault();
    const {history} = this.props;

     API.signUp(this.state)
      .then(res => history.push("/login") )
      .catch (err =>  console.log(err));
  };
  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <Container fluid>
    {/* <Nav isloggedIn={this.state.isLoggedIn} /> */}
        <Row>
          <Col size="md-8">
          
            <form >
            <h1 className="headerOne">Sign Up</h1>
                <Input
                  label="First Name"
                  value={this.state.firstName}
                  onChange={this.onChange('firstName')}
                  name="firstName"
                  placeholder="John"
                />
                {/* <label>Last Name</label> */}
                <Input
                  label= "Last Name"
                  value={this.state.lastName}
                  onChange={this.onChange('lastName')}
                  name="lastName"
                  placeholder="Snow"
                />
                {/* <label>Username</label> */}
                <Input
                  label= "Username"
                  value={this.state.username}
                  onChange={this.onChange('username')}
                  name="username"
                  placeholder="username"
                />
                {/* <label>Email</label> */}
                <Input
                  label= "Email"
                  value={this.state.email}
                  onChange={this.onChange('email')}
                  name="email"
                  placeholder="email"
                />
                
                <Input
                  label= "Password"
                  value={this.state.password}
                  onChange={this.onChange('password')}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
                  onClick={this.handleSignup}
                >
                  Sign Up
                </FormBtn>
                {/* <Button color="danger">Danger!</Button> */}
              </form>
            
          </Col>
          <Col size="md-4">
          <Link to="/login" className="banner-jumbo">
              <FormBtn>
                  <h5>Already a user?</h5>
                    <h6>Login</h6>
                </FormBtn>
                </Link>
           
          </Col>
        </Row>
        <Row>
             
         
        </Row>
       </Container>
    );
  }
}

export default SignUp;