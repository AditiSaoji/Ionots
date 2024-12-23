import React from 'react';
import ProgressTracking from './components/ProgressTracking';

function App() {
  const candidateId = "60d5f9b9b35f5c2b689b659b"; // Replace with dynamic candidate ID or state

  return (
    <div>
      <ProgressTracking candidateId={candidateId} />
    </div>
  );
}

export default App;
