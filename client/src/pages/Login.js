import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card"
import { Input, TextArea, FormBtn } from "../components/Form";
import API from '../utils/API';
// // import { Link } from 'react-router-dom';
// import RandomHomeComponent from '../components/RandomHomeComponent';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = event => {
    // const { name, value } = event.target;
    // console.log(event.target.id)
    // console.log(event.target.value);
    console.log("hello");
    // // this.setState({
    //   [name]: value
    // });
  }
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
    API.login(this.state)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };

  onChange = key => e => this.setState({ [key]: e.target.value });
  render() {
    return (
      <Container fluid>
      
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <form>
                <Input
                  value={this.state.email}
                  onChange={this.onChange('email')}
                  name="email"
                  placeholder="email@email.com"

                  
                />
                <Input
                  value={this.state.password}
                  onChange={this.onChange('password')}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.onSubmit}
                >
                  Login
                </FormBtn>
              </form>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Card size="md-10 md-offset-1">
            
          </Card>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Sign Up</Link>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
