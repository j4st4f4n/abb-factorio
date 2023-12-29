import express, { Express, NextFunction, Request, Response } from "express";
import { Server } from "socket.io";
import dotenv from "dotenv";
import { createServer } from "http";
import { generateNewMockPart } from "./model/part";

dotenv.config();

const port = process.env.PORT ?? 8000;
const app: Express = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.get("/part", (req: Request, res: Response) => {
  setInterval(() => {
    const newPart = generateNewMockPart();
    console.log("[newPart] ", newPart.id);
    io.emit("new-parts", newPart);
  }, 5000);
  res.send(generateNewMockPart());
});

io.on("connection", socket => {
  console.log(`[connection]: ${socket.id}`);
});

server.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
