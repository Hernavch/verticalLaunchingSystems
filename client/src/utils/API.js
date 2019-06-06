import axios from "axios";

export default {
  // Gets all books
  getjobs: function(searchData) {
   return axios.post("/api/career/getjobs/", searchData);
  },
  searchjob:function(data){
    return axios.post("/api/career/searchjob"+ data)
  },
  signUp: function(signupdata) {
    return axios.post("/api/users/signup", signupdata);
  },
  login: function(loginData) {
    return axios.post("/api/users/login", loginData);
  }
};
