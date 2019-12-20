var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function signup(email, password, retorno){
    const values = [email, password];
    const query = `insert into diary._user(__email, __password) values ($1, $2)`;
    return Postgres.query(query,"insert", retorno, values);
}

function login(email, password, retorno){
    const values = [email, password];
    const query = `select __id, __email, __name, __notify, __time, __theme from diary._user where __email ilike $1 and __password = $2`;
    return Postgres.query(query,"select", retorno, values)
}

router.post('/create',function (req, res, next) {
        console.log("Request signup");
        signup(req.body.email, req.body.password, res)

});

router.post('/login',function (req, res, next) {
    console.log("Request login");
    login(req.body.email, req.body.password, res)

});




module.exports = router;
