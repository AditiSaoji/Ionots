// src/components/TrackProjectPage.js
import React from 'react';
import { useParams } from 'react-router-dom';

const TrackProjectPage = () => {
  const { id } = useParams(); // Get the project ID from the URL

  return (
    <div>
      <h1>Tracking Project {id}</h1>
      <p>Here you can track the progress of Project {id}.</p>
    </div>
  );
};

export default TrackProjectPage;
