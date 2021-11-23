import { connection } from "@/infra/db/typeorm/helper/typeorm-helper";
import "dotenv/config";
import express from "express";
import "reflect-metadata";

const app = express();

connection.create();

app.use(express.json());

export default app;
