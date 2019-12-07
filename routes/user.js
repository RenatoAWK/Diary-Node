var express = require('express');
var router = express.Router();

function signup(email, password){
    console.log("Pegou o cadastro");
    console.log("E-mail: ",email);
    console.log("Password: ",password);
}

function login(email, password){
    console.log("Pegou o login");
    console.log("E-mail: ",email);
    console.log("Password: ",password);
}

router.post('/',function (req, res, next) {
    switch (req.body.type) {
        case "signup": signup(req.body.email, req.body.password);
            break;
        case "login": login(req.body.email, req.body.password);
            break;
        default:
            console.log("Caiu fora");
    }
    res.send("OK")
});

router.get('/', function (req, res, next) {
    console.log("Get funcionando")
    res.send("OK")
});

module.exports = router;
