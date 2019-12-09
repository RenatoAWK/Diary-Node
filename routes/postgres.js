const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL_DIARY, ssl:true,
});

client.connect();

class Postgres{
    static query(query, type, retorno) {


        try {
            switch (type) {
                case "insert":
                    client.query(query, (err, res) => {
                        if (err) return retorno.json({"status":"not OK"});
                        client.end();
                        return retorno.json({"status":"OK"});
                    });
                    break;

                case "select":
                    client.query(query, (err, res) => {
                        if (err || res.rows.length !== 1) return retorno.json({"status":"not OK"});
                        client.end();
                        return retorno.json(res.rows)
                    })
            }
        } catch (e) {
            client.end();
            return retorno.json({"status":"not OK"});
        }

    }
}

module.exports = Postgres;