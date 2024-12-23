const mongoose = require('mongoose');

// Define the schema for tracking candidate progress and score
const progressSchema = new mongoose.Schema({
  candidateId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the user (candidate) model
    required: true
  },
  tasks: [
    {
      taskName: String,
      isCompleted: {
        type: Boolean,
        default: false
      },
      score: {
        type: Number,
        default: 0
      }
    }
  ],
  totalScore: {
    type: Number,
    default: 0
  }
});

const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;
