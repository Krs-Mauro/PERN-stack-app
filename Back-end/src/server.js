const cors = require("cors");
const express = require("express");
const { Server: socketServer } = require("socket.io");
const { createServer } = require("node:http");
const userRoutes = require("./Users/routes");
const itemRoutes = require("./Items/routes");

const port = 3000;
const app = express();
const httpServer = createServer(app);
const io = new socketServer(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
  },
});

app.use(express.json());
app.use(cors());
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/items", itemRoutes);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

httpServer.listen(port + 1, () => {
  console.log(`httpServer listening on port http://localhost:${port + 1}`);
});
