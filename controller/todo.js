const Task = require("../model/Todo");

const createTodo = async (req, res) => {
  const task = req.body;
  try {
    await Task.create(task);
    res.status(201).json("task crated!");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

module.exports = {
  createTodo,
};
