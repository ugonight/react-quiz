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


/**
 * 出題処理
 */

// クイズスタート
app.get("/Quiz/Start", function(req, res, next) {

});

// 次の問題
app.get("/Quiz/Next", function(req, res, next) {

});

// 終了処理
process.on('exit', function() {
    Manager.close();
});

process.on('SIGINT', function() {
    process.exit();
});