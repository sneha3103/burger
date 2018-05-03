var orm = require("../config/orm.js");

var burgers = {
    selectAll: function(cb) {
        orm.selectAll(function(res){
            cb(res);
        });
    },

    //columns and values are arrays
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }
};

module.exports = burgers;