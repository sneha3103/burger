var connection = require("../config/connection.js");


//printQuestionMarks function is to convert the array of question marks from mysql placeholders, and convert them to string.
// ["?", "?", "?"].toString() => "?,?,?";

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // Created a for loop to go through the keys and push the value into a string integer array
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }

        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  


var orm = {
    //select all from burgers table
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result){
            if (err) throw err;
                cb(result);
           
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
    updateOne: function(updateBurger, burgerId, cb){
        console.log("updateOne hit");
        var queryString = "UPDATE burgers SET devoured = true WHERE ?"
        connection.query(queryString, {id: burgerId}, function (err, result){
            if (err) throw (err);
            cb(result);
        });
    }

    //orm.updateOne("2"//button associated with it html. data attr)
}

module.exports = orm;