var express = require('express');
var router = express.Router();
const Postgres = require('./postgres');

function insert(id_user, text, emotion, created, edited, res){
    const values = [id_user, text, emotion, created, edited];
    const query = `insert into diary._note(__id_user, __text, __emotion, __created, __edited) values ($1, $2, $3, $4, $5)`;
    return Postgres.query(query,"insert", res, values)
}

function get(id_user, res){
    const values = [id_user,];
    const query = `select __id, __text, __emotion, __created, __edited from diary._note where __id_user=$1 `;
    return Postgres.query(query, "select", res, values);

}

function update(id, text, emotion, created, edited, res) {
    const values = [id, text, emotion, created, edited];
    const query = `update diary._note set __text=$2, __emotion=$3, __created=$4, __edited=$5 where __id=$1`;
    return Postgres.query(query, "update", res, values)
}

function remove(id, res){
    const values = [id];
    const query = `delete from diary._note where __id=$1`;
    return Postgres.query(query, "remove", res, values);
}

router.post('/create',function (req, res, next) {
        console.log("Request note create");
        insert(req.body.id_user, req.body.text, req.body.emotion, req.body.created, req.body.edited, res);

});

router.post('/get', function (req, res, next) {
        console.log("Request note get");
        get(req.body.id_user, res);

});

router.post('/edit', function (req, res, next) {
    console.log("Request note edit");
    update(req.body.id, req.body.text, req.body.emotion, req.body.created, req.body.edited, res);

});

router.post('/remove', function (req, res, next) {
    console.log("Request note remove");
    remove(req.body.id, res);

});






module.exports = router;
