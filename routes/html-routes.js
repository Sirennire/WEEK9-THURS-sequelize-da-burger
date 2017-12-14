var db = require("../models");

module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(data) {
        var hbsObject ={
          burgers: data
        };
      //  console.log(hbsObject);
        //console.log(hbsObject);
        res.render("index", hbsObject);
        // We have access to the todos as an argument inside of the callback function
      
      });
    // res.render("index")
  });
 

};