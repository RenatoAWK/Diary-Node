var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function login(email, password, retorno){
    const query = `select __id, __email, __name, __notify, __time, __theme from diary._user where __email ilike '${email}' and __password = '${password}'`;
    return Postgres.query(query,"select", retorno)
}

router.post('/',function (req, res, next) {
        console.log("Request login");
        login(req.body.email, req.body.password, res)

});




module.exports = router;
