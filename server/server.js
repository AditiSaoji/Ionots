const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const progressRoutes = require('./routes/progressRoutes');
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/ionots', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/progress', progressRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
