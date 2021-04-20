const MongoClient = require('mongodb').MongoClient;
const uri = require("./setting.json").MongoUrl || "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

exports.init = function() {
    client.connect(err => {
        if (err) console.log(err);
        else console.log("connection success!");
    });
};

exports.close = function() {
    client.close();
};

exports.getCategoryList = function() {
    return new Promise(function(callback) {
        var categoryList = client.db("react_quiz").collection("questions").distinct("category");
        callback(categoryList);
    });
}