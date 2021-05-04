const MongoClient = require('mongodb').MongoClient;
const uri = process.env.MongoUrl || "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
var db = null;

exports.init = function() {
    client.connect(err => {
        if (err) console.log(err);
        else {
            db = client.db("react_quiz");
            console.log("connection success!");
        };
    });
};

exports.close = function() {
    client.close();
};

/**
 * メニュー 取得処理
 */

// カテゴリリスト
exports.getCategoryList = function() {
    return new Promise(async function(callback) {
        var categoryList = await db.collection("questions")
            .distinct("category");
        callback(categoryList);
    });
}

// レーティングリスト
exports.getRatingList = function() {
    return new Promise(async function(callback) {
        var ratingList = await db.collection("questions")
            .distinct("rating");
        callback(ratingList);
    });
}

// 問題数
exports.getQuizCount = function(categoryList, ratingList) {
    return new Promise(async function(callback) {
        var count = await db.collection("questions")
            .find({ category: { $in: categoryList }, rating: { $in: ratingList } }).count();
        callback(count);
    });
}

// 途中データ
exports.getProgress = function(userId) {
    return new Promise(async function(callback) {
        var quesSet = await db.collection("manage").findOne({ userId: userId });
        var number = quesSet.quesNumber;
        var count = quesSet.questions.length;
        callback({ number: number, count: count });
    });
}

/**
 * 出題処理
 */

// 管理している問題
// キーをユーザー名とする
// const g_managingQuestions = new Map();

// クイズスタート
exports.startQuiz = function(userId, categoryList, ratingList, quesNumber) {
    return new Promise(async function(callback) {
        // 出題対象の問題を取得
        var questions = await db.collection("questions")
            .find({ category: { $in: categoryList }, rating: { $in: ratingList } }).toArray();

        // シャッフル
        var shuffleQuestions = [];
        while (shuffleQuestions.length < quesNumber) {
            n = questions.length;
            k = Math.floor(Math.random() * n);

            shuffleQuestions.push(questions[k]);
            questions.splice(k, 1);
        }

        // 登録
        // g_managingQuestions.set(userId, { userId: userId, questions: shuffleQuestions, quesNumber: 0, results: [] });
        await db.collection("manage").deleteOne({ userId: userId });
        await db.collection("manage").insertOne({ userId: userId, questions: shuffleQuestions, quesNumber: 0, results: [] });

        callback(true);
    });
}

// 現在の問題を取得
exports.getCurrentQuestion = function(userId) {
    return new Promise(async function(callback) {
        // var quesSet = g_managingQuestions.get(userId);
        var quesSet = await db.collection("manage").findOne({ userId: userId });
        var questions = quesSet.questions;
        var number = quesSet.quesNumber;
        callback({ question: questions[number], quesNumber: number });
    });
}

// 成績を反映
exports.applyResult = function(userId, result) {
    return new Promise(async function(callback) {
        // var quesSet = g_managingQuestions.get(userId);
        var quesSet = await db.collection("manage").findOne({ userId: userId });
        quesSet.quesNumber = quesSet.quesNumber + 1;
        quesSet.results.push(result);
        await db.collection("manage").updateOne({ userId: userId }, [{ $set: { quesNumber: quesSet.quesNumber, results: quesSet.results } }]);
        callback(true);
    });
}