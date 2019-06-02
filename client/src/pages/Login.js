import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card"
import { Input, TextArea, FormBtn } from "../components/Form";
import API from '../utils/API';
import UserContext from '../utils/UserContext';
// // import { Link } from 'react-router-dom';
// import RandomHomeComponent from '../components/RandomHomeComponent';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error:'',
    currentUser:null
  };
  onChange = key => e => this.setState({ [key]: e.target.value });
  
  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });
    }

  //  onSubmit = (event) => {
  //   event.preventDefault();
  //   API.login(this.state)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err));
  // };

  handleLogin = (event, onLogin) => {
    event.preventDefault();
    const {history} = this.props;
    const {email, password} = this.state;

    API.login({email, password})
    .then(res => {
        onLogin(res.data);
        history.push("/")
    })
    .catch(err => {
      this.setState({error: err.response.data.error})
    });
  } 


  render() {
   const {email, password, error} = this.state;

    return (
      <UserContext.Consumer>
      {({onLogin}) => (
      
        <Container fluid>
      
        <Row>
          <Col size="md-12 sm-12">
           
              <form size="sm-12">
                <h1 className="headerOne" >Login</h1>
                <Input
                  label="Email"
                  value={email}
                  onChange={this.onChange('email')}
                  name="email"
                  placeholder="email@email.com"
                 
                />
                <Input
                  label="Password"
                  value={password}
                  onChange={this.onChange('password')}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(email && password)}
                  onClick={(event) => this.handleLogin(event, onLogin)}
                  >   Login
                 </FormBtn>

                    </form>
              
          </Col>
        </Row>
        <Row>
          <Card size="md-10 md-offset-1">
            
          </Card>
        </Row>
        <Row>
          <Col size="md-2 sm-12">
            <Link to="/signup">← Sign Up</Link>
            </Col>
        </Row>
      </Container>
    
      )}
      
      
      </UserContext.Consumer>
      
    );
  }
}

export default Login;
