// src/components/LinkBox.js
import React from 'react';

function LinkBox({ links }) {
  return (
    <div className="link-box">
      {links.map((link, index) => (
        <div key={index} className="link">
          <img src={link.logo} alt={link.title} className="link-logo" />
          <a href={link.url}>{link.title}</a>
        </div>
      ))}
    </div>
  );
}

export default LinkBox;
