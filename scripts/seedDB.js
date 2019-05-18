const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/careerlaunch"
);

const userSeed = [
  {
    firstName: "Steven",
    lastName: "King",
    userName:"Sking",
    email:"sking@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Lord",
    lastName: "Flies",
    userName:"LordOfFlies",
    email:"LordOfFlies@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Catcher",
    lastName: "Rye",
    userName:"CatcherInRye",
    email:"CatcherInRye@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Lord",
    lastName: "Flies",
    userName:"LordOfFlies",
    email:"LordOfFlies@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    userName:"Hpotter",
    email:"Hpotter@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Cora",
    lastName: "Line",
    userName:"Coraline",
    email:"Coraline@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Coder",
    lastName: "Language",
    userName:"Colanguage",
    email:"Colanguage@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Jeff",
    lastName: "Stone",
    userName:"StoneStore",
    email:"StoneStore@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Arnold",
    lastName: "Recall",
    userName:"Schwarzenegger",
    email:"Schwarzenegger@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Astro",
    lastName: "Tyson",
    userName:"Atyson",
    email:"Atyson@email.com",
    password:"1234",
    date: new Date(Date.now())
  }, 
  {
    firstName: "Frank",
    lastName: "Shelley",
    userName:"Frankenstien",
    email:"Frankenstien@email.com",
    password:"1234",
    date: new Date(Date.now())
  },
  {
    firstName: "Scott",
    lastName: "Gatsby",
    userName:"Ggasby",
    email:"Ggasby@email.com",
    password:"1234",
    date: new Date(Date.now())
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
