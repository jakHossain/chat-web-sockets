import dotenv from "dotenv";
import { createServer } from "http";
import express, { Router } from "express";
import { WebSocketServer } from "ws";

import routerIndex_v1 from "./routes/v1/index.js";

//create http and websocket server on port 3000
const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server, path: "/ws" });

app.use("/api/v1", routerIndex_v1);

wss.on("connection", (ws) => {
  console.log("Client connected!");

  ws.on("message", (message) => {
    console.log("Message:", message.toString());
  });
});

server.listen(3000, () => {
  console.log("REST API + Websocker server running!");
});
