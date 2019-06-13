const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName:{ type: String,
               required: true,
               lowercase: true
               },
  lastName:{ type: String, 
              required: true,
              lowercase: true 
            },
  username:{ type: String, 
             required: true, 
             lowercase: true,
             unique: true 
            },
  zip:{ type: String},
  email:{type:String, 
    lowercase: true,
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
  profileImg:{type:String},
  education:{type:String},
  status:{type:String},
  certifications: {type:String},
  skill1:{type:String},
  skill2:{type:String},
  skill3:{type:String},

  intrests:[],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;