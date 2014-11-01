var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');
var session = require('express-session');
var express = require('express');

function middleware(app) {
    console.log("setting middleware");

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    console.log("Done setting middleware");
}

module.exports = middleware;