const Pool = Require("pg").Pool;

const pool = new Pool({
	host: "51.195.44.176",
    user: "kan",
    password: "example",
    database: "plenty",
	port: 5432,
});

module.exports = pool;