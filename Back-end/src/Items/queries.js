const getItems = "SELECT * FROM Items";
const addItem =
  "INSERT INTO Items (name, qty, owner) VALUES ($1, $2, $3) RETURNING *";
const getItemsByUserId = "SELECT * FROM Items WHERE owner = $1";
const deleteItem = "DELETE FROM Items WHERE id = $1  AND owner = $2";

module.exports = {
  getItems,
  addItem,
  getItemsByUserId,
  deleteItem,
};
