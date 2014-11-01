module.exports = function (request, response, next) {
    console.log(request.body);

    var name = request.body.name;
    var password = request.body.password;

    var sesName = request.session.name;
    var sesPassword = request.session.password;

    if (sesName === undefined && sesPassword === undefined) {
        request.session.name = name;
        request.session.password = password;
    }
    console.log(name);
    console.log(password);

    if (request.session.name == undefined && request.session.password == undefined) {
        response.render('login.ejs');
    } else {
        response.send("Hello " + request.session.name);

    }
};