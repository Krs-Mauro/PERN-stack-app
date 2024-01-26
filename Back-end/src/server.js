const express = require("express");
const userRoutes = require("./Users/routes");
const itemRoutes = require("./Items/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/items", itemRoutes);

app.listen(port, () =>
  console.log(`App listening on port http://localhost:${port}`)
);