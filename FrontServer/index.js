var express = require("express");
var app = express();

var server = app.listen(process.env.PORT || 3000, function() {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.use(express.static('public'));

app.get("/Rest", function(req, res, next) {
    res.json("test");
});