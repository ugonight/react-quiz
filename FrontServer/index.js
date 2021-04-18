var express = require("express");
var app = express();
var session = require('express-session');
const cookieParser = require('cookie-parser');

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

app.get("/Rest", function(req, res, next) {
    // res.json(req.session);
    res.json(req.cookies);
});

app.get("/Start", function(req, res, next) {

});

app.get("/Next", function(req, res, next) {

});

// 終了処理
process.on('exit', function() {
    Manager.close();
});

process.on('SIGINT', function() {
    process.exit();
});