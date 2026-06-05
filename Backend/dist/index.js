import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use("/api", routes);
app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map