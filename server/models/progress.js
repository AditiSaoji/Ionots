const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  candidateId: String,
  projectId: String,
  tasksCompleted: Number,
  totalTasks: Number,
  score: Number,
});

module.exports = mongoose.model('Progress', progressSchema);
