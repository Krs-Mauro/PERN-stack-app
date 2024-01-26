const getUserById = "SELECT * FROM Users WHERE id = $1";
const getUserByEmail = "SELECT * FROM Users WHERE email = $1";
const addUser = "INSERT INTO Users (email, password) VALUES ($1, $2)";
const logUserIn =
  "UPDATE Users SET logged = true WHERE id = $1 AND password = $2 RETURNING *";
const logUserOut = "UPDATE Users SET logged = false WHERE id = $1";

module.exports = {
  getUserByEmail,
  addUser,
  logUserIn,
  logUserOut,
};
