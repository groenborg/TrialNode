var should = require('should');
var db = require('../datasource/connection');


describe('Database connection', function () {
    it('Connect callback should call done', function (done) {
        db.connect(function () {
            done();
        })
    });

    it('Close callback should call Close', function () {
        db.close(function () {
            done();
        });
    })
});