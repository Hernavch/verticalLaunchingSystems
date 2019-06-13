const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");
// var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
require('dotenv').config()

// Defining methods for the usersController
module.exports = {
  signUp: function(req, res) {
    bcrypt.hash(req.body.password, saltRounds, function(err,hash){
      if(err){
        console.log("no hash");
      }
      const user= {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email:req.body.email,
        password:hash
       }
             
      db.User
      
      .create(user)
      .then(data => console.log(data, "then data"))
      .catch(err => res.status(422).json(err))
    });
  
      },
  login: function(req, res) {
    const {email, password} = req.body;
    db.User
       .findOne({email})
       .then(dbModel => {
         console.log(dbModel);
        bcrypt.compare(password, dbModel.password, function(error, same){
           if(same){
            //  return res.json({ok:true}, console.log("hello"))
            const token = jwt.sign({
              username: dbModel.username,
              id: dbModel._id
            }, process.env.SECRET_KEY )
            console.log(token);
            return res.json({
              token, 
              name:dbModel.firstName,
              username: dbModel.username,
              id: dbModel._id})
            
           } else if(dbModel=== null){
             console.log("No Match")
             return res.status(404).json({
               error:"Password/Username Incorrect"
               
             })
           }
         })
       })
       .catch(err => res.status(422).json(err));
      },
  hello:function(req,res){
   res.json("Hello!");
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      console.log("found");
  }
};
