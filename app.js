var express = require('express');
var middleware = require('./middleware');
var routing = require('./routing');
var app = express();

middleware(app);
routing(app);


// error handlers \\
// catch 404 and forward to error handler \\
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    console.log("Mode " + app.get('env'));
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        //res.render('error', {
        //    message: err.message,
        //    error: err
        //});
        res.send(err + err.message);
    });
}
if (app.get('env') === 'production') {
    console.log("Mode " + app.get('env'));
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

app.listen(3000);
