import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

import { Input, TextArea, FormBtn, FormTitle } from "../components/Form";
import API from "../utils/API";


class SignUp extends Component {
  state = {
    firstName:'',
    lastName:'',
    username:'',
    email:'',
    password:'',
   // loggedIn: false

  };
  
  // componentDidMount() {
  //   const token = localStorage.getItem('current_user_token');

  //   if (token) {
  //     API.validateToken(token)
  //       .then(() => this.props.history.push('/'))
  //       .catch(() => localStorage.removeItem('current_user_token'));
  //   }
  // }
  onSubmit = (event) => {
    event.preventDefault();
     API.signUp(this.state)
      .then(res => console.log(res.data))
      .catch (err =>  alert(err.response.data.message));
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
                  onClick={this.onSubmit}
                >
                  Sign Up
                </FormBtn>
                {/* <Button color="danger">Danger!</Button> */}
              </form>
            
          </Col>
        </Row>
        <Row>
             
         
        </Row>
       </Container>
    );
  }
}

export default SignUp;