var index = require('./routes/index');


function setRoutes(app) {
    console.log("Setting up routes");
    // Apply routes
    app.use('/', index);

    console.log("Done setting up routes");
}


module.exports = setRoutes;