const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "shappy",
  password: "admin",
  port: 5432,
});

module.exports = pool;
