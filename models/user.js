const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName:{ type: String, required: true },
  zip:{ type: String, required: true },
  email: String,
  password:{ type: String, required: true },
  intrests:[],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;