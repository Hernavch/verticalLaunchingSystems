import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import {CardImage, CardBody, CardHeader, UlList, CardHeaderBasic, UlListSkill, UlListBasic} from "../components/FullCard";
import Card from "../components/Card";
import API from "../utils/API";
import UserContext from '../utils/UserContext';
import { Col, Row, Container, UserContainer } from "../components/Grid";
import { FormBtn, Input } from "../components/Form";



class Users extends Component {
  state = {
    username:"",
    image:"https://dcp.org/wp-content/uploads/2018/11/person-placeholder-e1543539209738.jpg",
    item1: "Student",
    item2: "Bachelors",
    item3:"A++",
    skill1:"SQL",
    skill2:"Technical Writing",
    skill3:"Critical Thinking",
    jobsearch:"",
    jobTitle:"",
    jobCompany:"",
    jobUrl:"",
    jobLocation:""

  };
componentDidMount(){
  
}
onChange = key => e => this.setState({ [key]: e.target.value });

handleJobSearch = (event, res) => {
  event.preventDefault();
  API.getjobs(this.state.jobsearch)
  .then(res=> 
    // console.log(res.data.jobTitle) 
    this.setState({
      jobTitle: res.data.jobTitle,
      jobCompany:res.data.company,
      jobUrl: res.data.jobUrl,
      jobLocation:res.data.location})
  )
  .catch(err => {
    this.setState({error: err.response.data.error})
  });
};
handleChange = event => {
  const {name, value} = event.target;
  this.setState({
    [name]: value
  });
  }

  render() {


    return (
      <UserContext.Consumer>
      {({user}) => (
       
     
       <UserContainer fluid>
         
        
        {user ?(
          <Row>
           <Col size="md-3 .d-sm-block ml-10">
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
            
              <UlListSkill
                skill1={this.state.skill1}
                skill2={this.state.skill2}
                skill3={this.state.skill3}
                />
                
            </Col>
            <Col size="md-6 sm-12" >
              <Card>
              <CardHeader
               title= "Find Jobs"
               />
               <form>
               <Input
                  label="Job Title Search"
                  value={this.state.jobsearch}
                  onChange={this.onChange('jobsearch')}
                  name="jobsearch"
                  placeholder="Software Developer"
                />
                <FormBtn
                  onClick={this.handleJobSearch}
                  // onClick={(event) => this.jobsearch(event, getjobs)}
                >
                  Search Jobs
                </FormBtn>

               </form>
              </Card>
              <br/>
              <Card>
              <CardHeader
               title= {this.state.jobTitle}
               title1= {this.state.jobCompany}
               href= {this.state.jobUrl}
               Url={this.state.jobUrl}
               title3= {this.state.jobLocation}
               />
              </Card>
              
            </Col>
            <Col size="md-3 sm-12" >
            <Card>
              <br/>
            <CardHeader
               title= "Hired Checklist"
               />
                <UlListBasic
                item1="Complete Resume"
                item2="Obtain References"
                item3="Create Cover letter"
                />
                 </Card>
            
            <Card>
            <CardHeader
               title= "Add to Checklist"
               />
                <UlListBasic
                item1="Submit Resume"
                
                />
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
