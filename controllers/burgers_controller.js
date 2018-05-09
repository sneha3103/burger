var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

// router.get("/", function(req, res){
//     res.redirect("/burgers");

// });

router.get("/", function (req, res){
    console.log("this root ran");
    burgers.selectAll(function (data) {
        var hbsObject = { 
            burgers: data
        };
        console.log(hbsObject);
        for (i = 0; i < hbsObject.burgers.length; i++) {
            hbsObject.burgers[i].devoured = parseInt(hbsObject.burgers[i].devoured);
        }
        res.render("index", hbsObject);
        
    });
});

router.post("/api/burgers", function(req, res){
    var newBurger = req.body.burger_name.toString();
    console.log(newBurger);
    console.log("post works");
    // res.redirect("/");
    
  burgers.insertOne(newBurger);
    // burgers.insertOne(newBurger, function(result) {
      // Send back the ID of the new quote
    //   res.json({ id: result.insertId });
        // res.redirect("/");
    // });
    res.redirect("/");
});

router.put("/api/burgers/update/:id", function (req, res){
    console.log("root gets hit");
    var condition = req.params.id;
    console.log("condition", condition);

    burgers.updateOne(condition);

    // burgers.updateOne({devoured: true}, condition, function(result) {
    //     if (result.changedRows == 0) {
    //       // If no rows were changed, then the ID must not exist, so 404
    //       return res.status(404).end();
    //     } else {
    //       res.status(200).end();
    //     }
    //     console.log(result);
        res.redirect("/");   
    // });   
});



module.exports = router;