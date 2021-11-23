import "express-async-errors";
import "dotenv/config";
import express from "express";
import "reflect-metadata";
import setupRoutes from "./routes";

const app = express();

app.use(express.json());

setupRoutes(app);

export default app;
