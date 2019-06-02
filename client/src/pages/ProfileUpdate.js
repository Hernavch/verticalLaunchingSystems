import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card"
import UserContext from '../utils/UserContext';
import { Input, TextArea, FormBtn, RadioBtn, Selectbtn } from "../components/Form";
import API from "../utils/API";

class ProfileUpdate extends Component {
  state = {
    interests:'',
    education:'',
    certifications:'',
    skills:'',

  };
  
  // componentDidMount() {
  //   const token = localStorage.getItem('current_user_token');

  //   if (token) {
  //     API.validateToken(token)
  //       .then(() => this.props.history.push('/'))
  //       .catch(() => localStorage.removeItem('current_user_token'));
  //   }
  // }

  // onSubmit = () => {
  //   API.signup(this.state)
  //     .then(res => localStorage.setItem('current_user_token', res.data.token))
  //     .catch(err => console.log(err));
  // };

  onChange = key => e => this.setState({ [key]: e.target.value });

  render() {
    return (
    <UserContext.Consumer>
      {({user}) => (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
              <h1 className="headerOne">Update Profile</h1>
                <Input
                  label="Interests"
                  value={this.state.intrests}
                  onChange={this.onChange('interests')}
                  name="interests"
                  placeholder="Software Developer"
                />
                <Input
                  label="Education"
                  value={this.state.education}
                  onChange={this.onChange('education')}
                  name="education"
                  placeholder="Bachelors"
                 />
                  <RadioBtn
                  label="option one"
                  value="true" 
                  />
                  <RadioBtn
                  label="option two"
                  value="true"/>
                  <RadioBtn 
                  label="option three"
                  value="true"/>
                 
                <Input
                  label="Certifications"
                  value={this.state.certifications}
                  onChange={this.onChange('certifications')}
                  name="certifications"
                  placeholder="CPR/AED"
                />
               
                <Input
                  label="Skills"
                  value={this.state.skills}
                  onChange={this.onChange('skills')}
                  name="skills"
                  placeholder="skills"
                />
                <Selectbtn
                label="Question Drop down"
                optionOne="More Options"
                optionTwo="Other"/>
                <FormBtn
                  // disabled={!(this.state.firstName && this.state.lastName && this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Update
                </FormBtn>
              </form>
          </Col>
        </Row>
        <Row>
          <Card size="md-10 md-offset-1">
            
          </Card>
        </Row>
       </Container>
       )
      }
      </UserContext.Consumer>
    );
  }
}

export default ProfileUpdate;