import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card"
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class ProfileUpdate extends Component {
  state = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',

  };
  
  componentDidMount() {
    const token = localStorage.getItem('current_user_token');

    if (token) {
      API.validateToken(token)
        .then(() => this.props.history.push('/'))
        .catch(() => localStorage.removeItem('current_user_token'));
    }
  }

  onSubmit = () => {
    API.signup(this.state)
      .then(res => localStorage.setItem('current_user_token', res.data.token))
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Update Profile</h1>
            <form>
                <Input
                  value={this.state.firstName}
                  onChange={this.onChange('firstName')}
                  name="firstName"
                  placeholder="John"
                />
                <Input
                  value={this.state.lastName}
                  onChange={this.onChange('lastName')}
                  name="lastName"
                  placeholder="Snow"
                />
                <Input
                  value={this.state.email}
                  onChange={this.onChange('email')}
                  name="username"
                  placeholder="Username"
                />
                <Input
                  value={this.state.password}
                  onChange={this.onChange('password')}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Sign Up
                </FormBtn>
              </form>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Card size="md-10 md-offset-1">
            
          </Card>
        </Row>
       </Container>
    );
  }
}

export default ProfileUpdate;