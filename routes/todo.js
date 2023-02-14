const express = require("express");
const router = express.Router();

//step-6 is here
const { createTodo } = require("../controller/todo");

router.route("/todo").post(createTodo);

// router
//   .route("/:userId")
//   .get(getSingleTask)
//   .patch(updateTask)
//   .delete(deleteTask);

//step-5
module.exports = router;
