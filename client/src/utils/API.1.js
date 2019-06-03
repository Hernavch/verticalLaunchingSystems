import axios from "axios";

export default {
  // Gets all books
  getInfo: function() {
    return axios.get("/api/users/details");
  },
  // Gets the book with the given id
 };
