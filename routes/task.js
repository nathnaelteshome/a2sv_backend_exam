const Task = require("../models/Task");
const router = require("express").Router();

// router.get("/", (req, res) => {
//   res.send("tasks");
// });
// GET a task

router.get("/find/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});
// DELETE task

router.delete("/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(200).json("Task has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE tasks

router.put("/:id", async (req, res) => {
  try {
    const updatedtask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedtask);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL TASKS
router.get("/", async (req, res) => {
  try {
    tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
