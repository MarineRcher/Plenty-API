const pool = require("../../db");

const getUsers = (req, res) => {
	pool.query("SELECT * FROM users", )
};

module.exports = {
	getUsers,
};