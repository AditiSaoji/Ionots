const express = require('express');
const Progress = require('../models/progressModel');
const router = express.Router();

// Get candidate's progress and score
router.get('/:candidateId', async (req, res) => {
  try {
    const progress = await Progress.findOne({ candidateId: req.params.candidateId });
    if (!progress) {
      return res.status(404).json({ message: "Progress not found for this candidate" });
    }
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update task completion and score
router.post('/:candidateId/task', async (req, res) => {
  try {
    const { taskName, score } = req.body;

    // Find the candidate's progress
    let progress = await Progress.findOne({ candidateId: req.params.candidateId });

    if (!progress) {
      // If no progress found, create a new progress entry
      progress = new Progress({
        candidateId: req.params.candidateId,
        tasks: [],
      });
    }

    // Update the task progress
    const taskIndex = progress.tasks.findIndex(task => task.taskName === taskName);
    if (taskIndex !== -1) {
      progress.tasks[taskIndex].isCompleted = true;
      progress.tasks[taskIndex].score = score;
    } else {
      progress.tasks.push({ taskName, isCompleted: true, score });
    }

    // Calculate the total score
    progress.totalScore = progress.tasks.reduce((total, task) => total + task.score, 0);

    await progress.save();
    res.json(progress);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
