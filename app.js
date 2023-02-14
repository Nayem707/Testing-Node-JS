const express = require("express");
const cors = require("cors");
require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasks = require("./routes/task");
app.use("/api/v1/tasks", tasks);

module.exports = app;
