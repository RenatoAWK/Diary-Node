var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function login(email, password, retorno){
    const values = [email, password];
    const query = `select __id, __email, __name, __notify, __time, __theme from diary._user where __email ilike $1 and __password = $2`;
    return Postgres.query(query,"select", retorno, values)
}

router.post('/',function (req, res, next) {
        console.log("Request login");
        login(req.body.email, req.body.password, res)

});




module.exports = router;
