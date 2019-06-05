import axios from "axios";

export default {
  // Gets all books
  getjobs: function(searchData) {
    return axios.get("/api/career/getjobs");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  signUp: function(signupdata) {
    return axios.post("/api/users/signup", signupdata);
  },
  login: function(loginData) {
    return axios.post("/api/users/login", loginData);
  },
  facebooklogin: function(facebookData){
    return axios.post("/auth/facebook", facebookData);
  }, 
  googlelogin: function(googleData){
    return axios.post("/auth/google", googleData);
  }
};
