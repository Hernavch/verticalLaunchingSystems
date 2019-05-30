const jwt = require("jsonwebtoken");

module.exports = {
    authentication: function(req, res, next){
    const token = req.header("Authorization");
    let bearer="";
    console.log(token);
     if(token){
       bearer =token.replace("Bearer ", "")
     }else{
       return res.status(404).json({
         error:"Authorization required 1"
       })
        }

      jwt.verify(bearer,process.env.SECRET_KEY, function(err, decoded){
        if (err){
           return res.status(403).json({
              error:"Authorization required"
           });
        }else{
          console.log(decoded)
        }
        next();
           
      });

  }
}