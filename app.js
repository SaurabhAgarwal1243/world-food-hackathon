var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crop_quality');
var db = mongoose.connection

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
// app.listen((process.env.PORT || 5001));

// Server index page
app.get("/", function (req, res) {
    res.send("Deployed!");
});

app.listen(5001,function(){
    console.log('Server started on http://localhost:5001');
})

