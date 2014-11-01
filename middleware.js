var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
var session = require('express-session');
var express = require('express');
var security = require('./security');

function middleware(app) {
    console.log("setting middleware");

    //app.set('env',process.env.NODE_ENV = 'production');
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(bodyParser.text());
    app.use(cookieParser());
    app.use(session({
        secret: 'keyboard cat',
        resave: true,
        saveUninitialized: true,
        cookie: {maxAge: null}
    }));
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(security);

    console.log("Done setting middleware");
}

module.exports = middleware;