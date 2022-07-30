import { router } from "./routes";
import express from "express";
import "reflect-metadata";
import cors from "cors";
import "./database";

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
    console.log("Server is running in port 5000")
});
