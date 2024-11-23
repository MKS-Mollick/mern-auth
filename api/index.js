import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/user.route.js";
("./routes/user.route.js");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connection successfull"))
  .catch((err) => console.log(err));
const app = express();

app.listen(3000, console.log("Server is running..."));

app.use("/api/user", router);
