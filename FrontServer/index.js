var express = require("express");
var app = express();
var session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors')

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