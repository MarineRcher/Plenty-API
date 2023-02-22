const pool = require("../../db");
const queries = require("./queries");

const getUsers = (req, res) => {
	pool.query(queries.getUsers, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});

};

const addUsers = (req, res) => {
	const { username, password } = req.body;

	// check if username exist in db
	pool.query(queries.checkUsernameExists, [username], (error, results) => {
		if (results.rows.length) {
			res.send("Username existe déjà");
		}

		// add users to db
		pool.query(queries.addUsers, [username, password], (error, results) => {
			if (error) throw error;
			res.status(201).send("Users créé avec succès !");

		});
	});
};

const getUsersById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getUsersById, [id], (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

const removeUsers = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.removeUsers, [id], (error, results) => {
		const noUserFound = !results.rows.length;
		if (noUserFound) {
			res.send("L'User n'existe pas dans la base de donnée");
		}
		pool.query(queries.removeUsers, [id], (error, results) => {
			if (error) throw error;
			res.status(200).send("User Supprimé avec succès");
		});
	});
};

module.exports = {
	getUsers,
	addUsers,
	getUsersById,
	removeUsers,
};