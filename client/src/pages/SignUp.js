import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card"
import { Input, TextArea, FormBtn } from "../components/Form";
import API from "../utils/API";

class SignUp extends Component {
  state = {
    book: {}
  };
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Sign Up</h1>
            <form>
                <Input
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  placeholder="John"
                />
                <Input
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Snow"
                />
                <Input
                  value={this.state.userName}
                  onChange={this.handleInputChange}
                  name="username"
                  placeholder="Username"
                />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                />
                <FormBtn
                  disabled={!(this.state.author && this.state.title)}
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
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default SignUp;