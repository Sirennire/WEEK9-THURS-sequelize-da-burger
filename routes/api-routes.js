var db = require("../models");

module.exports = function(app) {

app.post("/api/burgers", function(req, res) {
    console.log(req.body); 
   db.Burger.create({
        burger_name: req.body.burger_name, 
        devoured: false

   }).then(function(){
    res.end(); 
   });
      
  });

 app.put("/api/burgers/:id", function(req, res) {
    //var condition = "id = " + req.params.id;
  
    //console.log("condition", condition);
  console.log(req.params.id);
    db.Burger.update({
      devoured: true
    }, 
    {
        where: {
            id: req.params.id
        }
    }).then(function(){
        res.end();
    })
  });

  app.delete("/api/burgers", function(req, res) {
    // Destroy takes in one argument: a "where object describing the todos we want to destroy
    db.Burger.destroy({
      where: {
        devoured: true
      }
    })
    .then(function() {
      res.end();
    });
  });
  

};