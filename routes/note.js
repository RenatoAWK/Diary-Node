var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function insert(id_user, text, emotion, created, edited, res){
    const values = [id_user, text, emotion, created, edited];
    const query = `insert into diary._note(__id_user, __text, __emotion, __created, __edited) values ($1, $2, $3, $4, $5)`;
    return Postgres.query(query,"insert", res, values)
}

router.post('/',function (req, res, next) {
        console.log("Request note");
        insert(req.body.id_user, req.body.text, req.body.emotion, req.body.created, req.body.edited, res);

});




module.exports = router;
