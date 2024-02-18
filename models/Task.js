const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, requires: true, unique: true },
    desc: { type: String, required: true },
    due: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);
