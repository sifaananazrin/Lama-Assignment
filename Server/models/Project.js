const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
  fileName: String,
  description: String,
  timeStamp: {
    type: Date,
    default: Date.now, 
  },
  status: {
    type: String,
    default: "processing", 
  },
});

const projectSchema = new mongoose.Schema({
  title: String,
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  files: [fileSchema], 
});

module.exports = mongoose.model("Project", projectSchema);
