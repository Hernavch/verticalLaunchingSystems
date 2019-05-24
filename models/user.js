const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName:{ type: String,
               required: true
               },
  lastName:{ type: String, 
              required: true 
            },
  username:{ type: String, 
             required: true, 
             unique: true 
            },
  zip:{ type: String},
  email:{type:String, 
        unique:true,
           match:[/.+@.+\..+/, "Please enter a valid e-mail address"]
        }, 
  password:{ type: String,
             required: true,
             validate:[
               function(input){
               return input.length >=6
             },
    "Password needs to be at least 6 characters"
  ] },
  intrests:[],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;