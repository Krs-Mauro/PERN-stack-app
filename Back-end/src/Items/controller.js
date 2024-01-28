const pool = require("../db");
const queries = require("./queries");
const userQueries = require("../Users/queries");

// TODO: sanitize user input

const getItems = (req, res) => {
  pool.query(queries.getItems, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json(result.rows);
  });
};

const getItemsByUserId = (req, res) => {
  const owner = req.params.id;
  pool.query(userQueries.getUserById, [owner], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.rowCount === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    pool.query(queries.getItemsByUserId, [owner], (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json(result.rows);
    });
  });
};

const addItem = (req, res) => {
  pool.query(userQueries.getUserById, [req.body.owner], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.rowCount === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    pool.query(
      queries.addItem,
      [req.body.name, req.body.qty, req.body.owner],
      (err, result) => {
        if (err) {
          res.status(500).json({ error: err.message });
          return;
        }
        res.status(201).json(result.rows[0]);
      }
    );
  });
};

const deleteItem = (req, res) => {
  pool.query(userQueries.getUserById, [req.body.owner], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (result.rowCount === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    pool.query(queries.deleteItem, [req.body.id, req.body.owner], (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(200).json({ message: "Item deleted" });
    });
  });
};

module.exports = {
  getItems,
  getItemsByUserId,
  addItem,
  deleteItem,
};
