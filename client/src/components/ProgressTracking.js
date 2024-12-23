import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressTracking = ({ candidateId }) => {
  const [progress, setProgress] = useState(null);
  const [taskName, setTaskName] = useState('');
  const [score, setScore] = useState('');

  // Fetch candidate's progress data from the backend
  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/progress/${candidateId}`);
        setProgress(response.data);
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };
    fetchProgress();
  }, [candidateId]);

  // Handle task completion and score update
  const handleTaskCompletion = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/api/progress/${candidateId}/task`, {
        taskName,
        score: parseInt(score),
      });
      setProgress(response.data);
      setTaskName('');
      setScore('');
    } catch (error) {
      console.error('Error updating task completion:', error);
    }
  };

  return (
    <div>
      <h1>Progress Tracking</h1>
      {progress ? (
        <div>
          <h2>Total Score: {progress.totalScore}</h2>
          <ul>
            {progress.tasks.map((task, index) => (
              <li key={index}>
                {task.taskName} - {task.isCompleted ? 'Completed' : 'Not Completed'} - Score: {task.score}
              </li>
            ))}
          </ul>

          <div>
            <h3>Update Task</h3>
            <input
              type="text"
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Score"
              value={score}
              onChange={(e) => setScore(e.target.value)}
            />
            <button onClick={handleTaskCompletion}>Complete Task</button>
          </div>
        </div>
      ) : (
        <p>Loading progress...</p>
      )}
    </div>
  );
};

export default ProgressTracking;
