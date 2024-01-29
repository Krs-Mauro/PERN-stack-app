const cors = require("cors");
const express = require("express");
const userRoutes = require("./Users/routes");
const itemRoutes = require("./Items/routes");

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/items", itemRoutes);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
