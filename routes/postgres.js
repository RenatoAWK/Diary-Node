const { Client } = require('pg');


class Postgres{
    static query(query, type, retorno, values) {
        const client = new Client({
            connectionString: process.env.DATABASE_URL_DIARY, ssl:true,
        });
        client.connect();
        try {
            switch (type) {
                case "insert":
                    client.query(query, values, (err, res) => {
                        if (err) {
                            console.log(err);
                            return retorno.json({"status":500});
                        }
                        client.end();
                        return retorno.json({"status":201});
                    });
                    break;

                case "update":
                    client.query(query, values, (err, res) => {
                        if (err) {
                            console.log(err);
                            return retorno.json({"status":500});
                        }
                        client.end();
                        return retorno.json({"status":200});
                    });
                    break;

                case "remove":
                    client.query(query, values, (err, res) => {
                        if (err) {
                            console.log(err);
                            return retorno.json({"status":500});
                        }
                        client.end();
                        return retorno.json({"status":200});
                    });
                    break;

                case "select":
                    client.query(query, values, (err, res) => {
                        if (err) {
                            console.log(err);
                            return retorno.json({"status":500});
                        }
                        client.end();
                        let result = {"status":200,"results":res.rows};
                        return retorno.json(result)
                    })
            }
        } catch (e) {
            client.end();
            console.log(e);
            return retorno.json({"status":406});
        }

    }
}

module.exports = Postgres;