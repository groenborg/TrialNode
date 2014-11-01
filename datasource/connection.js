var db = require('mongoose');
var database = "mongodb://localhost/users";


db.connection.on('open', function () {
    console.log("connection have been opened");
}).on('close', function () {
    console.log("Connection closed");
});

function connect(onOpen) {
    db.connect(database, onOpen);
}
connect();

function close(onClose) {
    db.connection.close(onClose)
}

module.exports = {
    connect: connect,
    close: close
};
