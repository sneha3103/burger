var connection = require("./connection.js");

var orm = {
    //select all from burgers table
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
            return result;
        });
    },

    insertOne: function(newBurger) {

        //insert into burgers set newburger = {
            // burger_name: "cheeseburger";
              //}
              //? depending on what the burger name is going to be
        var queryString = "INSERT INTO burgers SET ?";
        //question mark will be replaced by the object listed in second parameter below
        connection.query(queryString, {burger_name: newBurger}, function(err, result){
            if (err) throw (err);
        });

        //orm.insertOne("cheeseburger"/user input jquery);
    },
    
    //value of devoured from false to true
    //devour button associated w/burger
    updateOne: function(updateBurger){
        var queryString = "UPDATE burgers SET devoured = true WHERE ?"
        connection.query(queryString, {id: updateBurger}, function (err, result){
            if (err) throw (err);
        });
    }

    //orm.updateOne("2"//button associated with it html. data attr)
}

module.exports = orm;
