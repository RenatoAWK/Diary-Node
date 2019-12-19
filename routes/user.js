var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function signup(email, password, retorno){
    const values = [email, password];
    const query = `insert into diary._user(__email, __password) values ($1, $2)`;
    return Postgres.query(query,"insert", retorno, values);
}

router.post('/',function (req, res, next) {
        console.log("Request signup");
        signup(req.body.email, req.body.password, res)

});




module.exports = router;
