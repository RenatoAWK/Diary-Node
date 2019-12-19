var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function insert(id_user, text, emotion, created, edited, res){
    const query = `insert into diary._note(__id_user, __text, __emotion, __created, __edited) values ('${id_user}','${text}','${emotion}','${created}','${edited}' )`;
    return Postgres.query(query,"insert", res)
}

router.post('/',function (req, res, next) {
        console.log("Request note");
        insert(req.body.id_user, req.body.text, req.body.emotion, req.body.created, req.body.edited, res);

});




module.exports = router;
