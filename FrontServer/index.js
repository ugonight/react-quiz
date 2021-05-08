var express = require("express");
var app = express();
var session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

var Manager = require("./manager");

var server = app.listen(process.env.PORT || 3000, function() {
    console.log("Node.js is listening to PORT:" + server.address().port);
    Manager.init();
});

// publicフォルダのReactUIを表示する
app.use(express.static('public'));

// セッション設定
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        // maxage: 1000 * 60 * 120 // 2時間
    }
}));

// クッキーを読み取れるようにする
app.use(cookieParser());

app.use(cors());

// Parsers for POST data
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ extended: false, limit: '20mb' }));

app.get("/Rest", function(req, res, next) {
    // res.json(req.session);
    res.json(req.cookies);
});

/**
 * 情報取得処理
 */

// カテゴリリスト
app.get("/Menu/Categories", function(req, res, next) {
    (async() => {
        var categoryList = await Manager.getCategoryList();
        res.json(categoryList);
    })().catch(next);
});

// レーティングリスト
app.get("/Menu/Ratings", function(req, res, next) {
    (async() => {
        var ratingList = await Manager.getRatingList();
        res.json(ratingList);
    })().catch(next);
});

// 問題数
app.post("/Menu/QuizCount", function(req, res, next) {
    (async() => {
        var count = await Manager.getQuizCount(req.body.categoryList, req.body.ratingList);
        res.json(count);
    })().catch(next);
});

// 途中データ
app.get("/Menu/Progress", function(req, res, next) {
    (async() => {
        var result = await Manager.getProgress(req.cookies.userId);
        res.json(result);
    })().catch(next);
});


/**
 * 出題処理
 */

// クイズスタート
app.post("/Quiz/Start", function(req, res, next) {
    (async() => {
        var count = await Manager.startQuiz(req.cookies.userId, req.body.categoryList, req.body.ratingList, req.body.quesNumber);
        res.json(count);
    })().catch(next);
});

// 現在の問題を取得
app.post("/Quiz/Get", function(req, res, next) {
    (async() => {
        var ques = await Manager.getCurrentQuestion(req.cookies.userId);
        res.json(ques);
    })().catch(next);
});

// 問題の結果を反映
app.post("/Quiz/SetResult", function(req, res, next) {
    (async() => {
        var result = await Manager.applyResult(req.cookies.userId, req.body.result);
        res.json(result);
    })().catch(next);
});

// 最終成績を取得
app.get("/Quiz/GetRecord", function(req, res, next) {
    (async() => {
        var record = await Manager.getRecord(req.cookies.userId);
        res.json(record);
    })().catch(next);
});

// 途中データを削除
app.post("/Quiz/Reset", function(req, res, next) {
    (async() => {
        var result = await Manager.resetQuiz(req.cookies.userId);
        res.json(result);
    })().catch(next);
});


// 終了処理
process.on('exit', function() {
    Manager.close();
});

process.on('SIGINT', function() {
    process.exit();
});