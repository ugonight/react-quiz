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