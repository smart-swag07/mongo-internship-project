const Task = require("../../domain/models/task");

exports.findTaskByStatus = async (req, res) => {
  try {

    const task = await Task.findOne({
      status: req.params.status
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
exports.getHighPriorityTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      priority: "High"
    });

    res.json(tasks);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getActiveTasks = async (req, res) => {
  try {

    const tasks = await Task.find({
      status: { $in: ["Pending", "In Progress"] }
    });

    res.json(tasks);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.getTasksSortedByPriority = async (req, res) => {
  try {

    const tasks = await Task.find().sort({ priority: -1 });

    res.json(tasks);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.countTasksByStatus = async (req, res) => {
  try {

    const result = await Task.aggregate([
      {
        $group: {
          _id: "$status",
          total: { $sum: 1 }
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.tasksByPriority = async (req, res) => {
  try {

    const result = await Task.aggregate([
      {
        $group: {
          _id: "$priority",
          total: { $sum: 1 }
        }
      }
    ]);

    res.json(result);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};