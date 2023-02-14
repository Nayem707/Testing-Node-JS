const express = require("express");
const cors = require("cors");
require("./config/db");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const tasks = require("./routes/task");
const productsRouter = require("./routes/products");
const todo = require("./routes/todo");

app.use("/api/v1", tasks, productsRouter, todo);

module.exports = app;
