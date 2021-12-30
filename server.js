import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
//import registerGameHandlers from "./gameHandlers.js";

const PORT = 8080;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("I am connected " + socket.id);
  //registerGameHandlers(io, socket);
  // ...
});

httpServer.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
