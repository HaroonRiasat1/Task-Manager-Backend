const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    code: {
      type: String,
    },
    assignedDeveloper: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "true",
    },
    assignedTester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: "true",
        },
        status: {
            type:String,
        },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
