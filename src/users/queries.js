const getUsers = "SELECT * FROM users";
const getUsersById = "SELECT * FROM users WHERE id = $1";
const checkUsernameExists = "SELECT s FROM users s WHERE s.username = $1";
const addUsers = "INSERT INTO users (username, email, password) VALUES ($1, $2)";
const removeUsers = "DELETE FROM users WHERE id = $1";
const updateUser = "UPDATE users SET password = $1 WHERE id = $2";

module.exports = {
    getUsers,
    checkUsernameExists,
    getUsersById,
    addUsers,
    removeUsers,
    updateUser,
};