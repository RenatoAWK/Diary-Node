var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function signup(email, password, retorno){
    const query = `insert into diary._user(__email, __password) values ('${email}','${password}')`;
    return Postgres.query(query,"insert", retorno);
}

function login(email, password, retorno){
    const query = `select * from diary._user where __email = '${email}' and __password = '${password}'`;
    return Postgres.query(query,"select", retorno)
}

router.post('/',function (req, res, next) {
    if (req.body.type === "signup"){
        console.log("Request signup");
        signup(req.body.email, req.body.password, res)

    } else if (req.body.type === "login"){
        console.log("Request login");
        login(req.body.email, req.body.password, res)

    }

});




module.exports = router;
