var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function signup(email, password, retorno){
    const query = `insert into diary._user(__email, __password) values ('${email}','${password}')`;
    const postgres = new Postgres();
    return postgres.query(query,"insert", retorno);
}

function login(email, password, retorno){
    const query = `select * from diary._user where __email = '${email}' and __password = '${password}'`;
    const postgres = new Postgres();
    return postgres.query(query,"select", retorno)
}

router.post('/',function (req, res, next) {
    if (req.body.type === "signup"){
        signup(req.body.email, req.body.password, res)

    } else if (req.body.type === "login"){
        login(req.body.email, req.body.password, res)

    }

});




module.exports = router;
