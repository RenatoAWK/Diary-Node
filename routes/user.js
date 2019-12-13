var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function signup(email, password, retorno){
    const query = `insert into diary._user(__email, __password) values ('${email}','${password}')`;
    return Postgres.query(query,"insert", retorno);
}

router.post('/',function (req, res, next) {
        console.log("Request signup");
        signup(req.body.email, req.body.password, res)

});




module.exports = router;
