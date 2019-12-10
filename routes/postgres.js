const { Client } = require('pg');


class Postgres{
    static query(query, type, retorno) {
        const client = new Client({
            connectionString: process.env.DATABASE_URL_DIARY, ssl:true,
        });
        client.connect();
        try {
            switch (type) {
                case "insert":
                    client.query(query, (err, res) => {
                        if (err) {
                            console.log(err);
                            return retorno.json({"status":"not OK"});
                        }
                        client.end();
                        return retorno.json({"status":"OK"});
                    });
                    break;

                case "select":
                    client.query(query, (err, res) => {
                        if (err || res.rows.length !== 1) {
                            console.log(err);
                            return retorno.json({"status":"not OK"});
                        }
                        client.end();
                        return retorno.json(res.rows[0])
                    })
            }
        } catch (e) {
            client.end();
            console.log(e);
            return retorno.json({"status":"not OK"});
        }

    }
}

module.exports = Postgres;