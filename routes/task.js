const express = require("express");
const router = express.Router();

//step-6 is here
const {
  getAllTask,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controller/task");

router.route("/tasks").get(getAllTask).post(createTask);

router
  .route("/:userId")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask);

//step-5
module.exports = router;
