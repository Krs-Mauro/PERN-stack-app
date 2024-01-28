const getUserById = "SELECT * FROM Users WHERE id = $1";
const getUserByEmail = "SELECT * FROM Users WHERE email = $1";
const addUser =
  "INSERT INTO Users (email, password, last_login_at, logged) VALUES ($1, $2, CURRENT_TIMESTAMP, true) RETURNING *";
const logUserIn =
  "UPDATE Users SET logged = true, last_login_at = CURRENT_TIMESTAMP WHERE email = $1 AND password = $2 RETURNING *";
const logUserOut = "UPDATE Users SET logged = false WHERE id = $1";

module.exports = {
  getUserById,
  getUserByEmail,
  addUser,
  logUserIn,
  logUserOut,
};
