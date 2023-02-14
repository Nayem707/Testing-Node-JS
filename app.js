require("./config/db");
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const todo = require("./routes/todo");
const tasks = require("./routes/task");
const productsRouter = require("./routes/products");

app.use("/api/v1", tasks, productsRouter, todo);

module.exports = app;
