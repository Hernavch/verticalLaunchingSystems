const db = require("../models");
const axios = require("axios");
require('dotenv').config()


module.exports = {
 details:function(req,res){
    //  console.log(process.env.Authorization);
    
    // Run the axios.get function...
    // The axios.get function takes in a URL and returns a promise (just like $.ajax)
    axios
    var onetCode = "29-1141.00"
    var zip = "95628"
    .get("https://api.careeronestop.org/v1/occupation/pilaTM9XEsBxYkv/"+onetCode+"/"+ zip +"?training=false&interest=false&videos=true&tasks=false&dwas=false&wages=false&alternateOnetTitles=false&projectedEmployment=true&ooh=false&stateLMILinks=false&relatedOnetTitles=false&skills=false&knowledge=false&ability=false&trainingPrograms=false", 
    {headers: 
        {"Authorization":process.env.Authorization,
        "Content-Type":"application/json"
    }})
     .then(function(response) {
      //  res.json(response.data.OccupationDetail[0].OnetTitle);
      var occName= response.data.OccupationDetail[0].OnetTitle;
      var occPage= (response.data.OccupationDetail[0].COSVideoURL);
      var occDetail= response.data.OccupationDetail[0].Projections;
      var occVideo =response.data.OccupationDetail[0].Video;
    
      console.log(response.data);
    
    // console.log(occPage);
    // console.log(occVideo);
    
        
    
        // console.log(response.data.OccupationSkillsMatchList);
      })
      .catch(function(error) {
        if (error.response) {
            console.log("THIS IS THE THE ERROR----------------------")
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an object that comes back with details pertaining to the error that occurred.
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
 }



}