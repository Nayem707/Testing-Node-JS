const Task = require("../model/Task");

const getAllTask = async (req, res) => {
  try {
    const allTask = await Task.find(); // no use req.params or req.body just use find method !
    res.status(200).json({ allTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

//CREATE TASK
const createTask = async (req, res) => {
  const task = req.body;
  try {
    await Task.create(task);
    res.status(201).json("task crated!");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { userId: userID } = req.params; //get "/api/v1/tasks/:userId" req.params not req.body
    const singleTask = await Task.findOne({ _id: userID });
    res.status(200).json({ singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  const task = req.body;
  try {
    const { userId: userID } = req.params;
    const updateTask = await Task.findByIdAndUpdate({ _id: userID }, task, {
      new: true,
      runValidators: true,
    });
    if (!updateTask) {
      res.status(404).json({ msg: `no task id : ${updateTask}` });
    }
    res.status(200).json({ updateTask });
  } catch (error) {
    res.status(500).json({ msg: `not validat : ${error}` });
  }
};

const deleteTask = async (req, res) => {
  res.send("delete task!");
};

//step-6
module.exports = {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
