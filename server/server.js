import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const mongoURI = process.env.mongoURI;

mongoose
  .connect(mongoURI)
  .then(console.log("connected"))
  .catch((err) => {
    console.log(err);
  });

app.use("/financial-records", financialRecordRouter);

app.listen(8000, console.log("Server running on http://127.0.0.1:8000"));
