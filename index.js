const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const taskRoute = require("./routes/task");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/tasks", taskRoute);

app.listen(5000, () => {
  console.log("Backend server is running");
});
