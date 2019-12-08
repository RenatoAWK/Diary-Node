class Postgres{
    query(query, type, retorno) {
        const { Client } = require('pg');
        const client = new Client({
            connectionString: process.env.DATABASE_URL_DIARY, ssl:true,
        });

        client.connect();

        try {
            switch (type) {
                case "insert":
                    client.query(query, (err, res) => {
                        if (err) return retorno.json({"status":"not OK"});
                        return retorno.json({"status":"OK"});
                    });
                    break;

                case "select":
                    client.query(query, (err, res) => {
                        if (err || res.rows.length === 0) return retorno.json({"status":"not OK"});
                        return retorno.json(res.rows)
                    })
            }
        } catch (e) {
            return JSON.parse("not OK")
        }
    }
}

module.exports = Postgres;