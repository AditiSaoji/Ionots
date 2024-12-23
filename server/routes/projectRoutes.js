const express = require('express');
const router = express.Router();
const ProjectAssignment = require('../models/projectAssignment');

// Fetch all projects for a candidate
router.get('/:candidateId', async (req, res) => {
  const projects = await ProjectAssignment.find({ candidateId: req.params.candidateId });
  res.json(projects);
});

// Update project status
router.post('/updateStatus', async (req, res) => {
  const { projectId, status } = req.body;
  await ProjectAssignment.updateOne({ projectId }, { status });
  res.json({ message: 'Status updated successfully' });
});

module.exports = router;
