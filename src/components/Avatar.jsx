// src/components/Avatar.js
import React from 'react';

function Avatar({ imageUrl }) {
  return (
    <div className="avatar">
      <img src={imageUrl} alt="Avatar" width="110" height="110"/>
    </div>
  );
}

export default Avatar;
