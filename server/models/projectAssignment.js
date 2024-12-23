const mongoose = require('mongoose');

const projectAssignmentSchema = new mongoose.Schema({
  candidateId: String,
  projectId: String,
  projectName: String,
  status: { type: String, default: "Assigned" },
  dueDate: Date,
});

module.exports = mongoose.model('ProjectAssignment', projectAssignmentSchema);
