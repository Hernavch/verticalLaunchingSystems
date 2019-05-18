const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

// Defining methods for the booksController
module.exports = {
  signUp: function(req, res) {
     var user= {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password
     }
        
    db.User
    .create(user)
    console.log(user)
    // .catch(err => res.status(422).json(err))
      },
  create: function(req, res) {
       const {username, password} = req.body;
       bcrypt.hash(password, 10, function(err, hash){
        const user = {
          username, 
          password:hash
        }
        db.User
        .create(user)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
      });          
          
        },
  login: function(req, res) {
    // console.log(db.User);
    const {username, password} = req.body;
    db.User
       .findOne({username: req.body.username}, (err, dbModel )=> console.log(dbModel))
       .catch(err => res.status(422).json(err));
          },

  
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
