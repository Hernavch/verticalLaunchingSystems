const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
var jwt = require('jsonwebtoken');
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

// Defining methods for the booksController
module.exports = {
  signUp: function(req, res) {
    db.User
       .find(req.query)
       .sort({ date: -1 })
       .then(dbModel => res.json(dbModel.body))
       .catch(err => res.status(422).json(err));
      },

  login: function(req, res) {
    // console.log(db.User);
    db.User
       .findOne({email: req.body.email}, (err, dbModel )=> console.log(dbModel))
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
