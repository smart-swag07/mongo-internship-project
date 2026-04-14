const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.post("/", taskController.createTask);
router.get("/status/:status", taskController.findTaskByStatus);
router.get("/priority/high", taskController.getHighPriorityTasks);
router.get("/status/active", taskController.getActiveTasks);
router.get("/priority/sorted", taskController.getTasksSortedByPriority);
router.get("/status/count", taskController.countTasksByStatus);

router.get("/priority/count", taskController.tasksByPriority);


module.exports = router;