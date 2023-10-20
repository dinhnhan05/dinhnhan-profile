// src/components/Bio.js
import React from 'react';

function Bio({ name, description }) {
  return (
    <div className="bio">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Bio;

