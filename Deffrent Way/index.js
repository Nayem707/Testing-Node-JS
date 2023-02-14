//step-1
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();

//step-3
//middleware
app.use(express.json());
// app.use(express.static("./public"));

//step-5
//routes
const tasks = require("./routes/task");
app.use("/api/v1/tasks", tasks);

//step-2
//server running
const connectDB = require("./db/connect");
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is run http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
