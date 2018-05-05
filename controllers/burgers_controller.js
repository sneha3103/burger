var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

// router.get("/", function(req, res){
//     res.redirect("/burgers");

// });

router.get("/", function (req, res){
    burgers.selectAll(function (data) {
        var hbsObject = { 
            burgers: data
        };
        console.log(hbsObject);
        for (i = 0; i < hbsObject.length; i++) {
            hbsObject.burgers[i].devoured = parseInt(hbsObject.burgers[i].devoured);
        }
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
    var newBurger = req.body.burger_name.toString();
    console.log(newBurger);

    burgers.insertOne("burger_name", newBurger, function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      
    });
    res.redirect("/");
    // burgers.insertOne([
    //     "burger_name" , "devoured"
    // ], [
    //     req.body.burger_name, req.body.devoured
    // ], function(result){
    //     res.json({ id: result.insertId });
    // });
});

router.put("/api/burgers/update/:id", function (req, res){
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burgers.updateOne({devoured: true}, condition, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
        res.redirect("/");
    });

    // burgers.updateOne({ 
    //     devoured: req.body.devoured 
    // }, condition, function(result) {
    //     if(result.changedRows == 0) {
    //         return res.status(404).end();
    //     } else {
    //         res.status(200).end();
    //     }
    //     // res.redirect("/");
    // });   
});



module.exports = router;