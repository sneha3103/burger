var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        });
    },
    //columns and values are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne(cols, vals, function(res) {
            cb(res);
        });
    },
   //objcolvals is devoured=true
   //condition is req.params.id
    updateOne: function(condition, cb) {
        orm.updateOne(condition, function(res){
            cb(res);
        });
   }
};

module.exports = burgers;