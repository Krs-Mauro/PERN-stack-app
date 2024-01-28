const pool = require("../db");
const queries = require("./queries");

// TODO: sanitize user input

const getUserByEmail = (req, res) => {
  pool.query(queries.getUserByEmail, [req.body.email], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.rowCount === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(result.rows[0]);
  });
};

const getUserById = (req, res) => {
  pool.query(queries.getUserById, [req.body.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.rowCount === 0) {
      res.status(404).json({ error: "User not found" });
      return;
    }
    res.status(200).json(result.rows[0]);
  });
};

const addUser = (req, res) => {
  pool.query(queries.getUserByEmail, [req.body.email], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    if (result.rowCount !== 0) {
      res.status(400).json({ error: "Email already exists" });
      return;
    }
    pool.query(
      queries.addUser,
      [req.body.email, req.body.password],
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

const logUserIn = (req, res) => {
  pool.query(
    queries.logUserIn,
    [req.body.email, req.body.password],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (result.rowCount === 0) {
        res.status(401).json({ error: "Invalid credentials" });
        return;
      }
      res.status(200).json(result.rows[0]);
    }
  );
};

const logUserOut = (req, res) => {
  pool.query(queries.logUserOut, [req.body.id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(200).json({ message: "Logged out" });
  });
};

module.exports = {
  getUserByEmail,
  getUserById,
  addUser,
  logUserIn,
  logUserOut,
};
