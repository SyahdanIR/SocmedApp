import express from "express";
import type { Express, Request, Response } from "express";
import routes from "./routes/index.js";
import cors from "cors";
import { Server } from "socket.io";

const app: Express = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api", routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

const server = app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Client connected:", socket.id);
});
