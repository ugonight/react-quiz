const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MongoUrl || "mongodb://127.0.0.1:27017";
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
        var categoryList = client.db("react_quiz").collection("questions")
            .distinct("category");
        callback(categoryList);
    });
}

exports.getRatingList = function() {
    return new Promise(function(callback) {
        var ratingList = client.db("react_quiz").collection("questions")
            .distinct("rating");
        callback(ratingList);
    });
}

exports.getQuizCount = function(categoryList, ratingList) {
    return new Promise(function(callback) {
        var count = client.db("react_quiz").collection("questions")
            .find({ category: { $in: categoryList }, rating: { $in: ratingList } }).count();
        callback(count);
    });
}