import React from 'react';

const ScrollDownIndicator = ({ href, title, text }) => {
  // This is a simple, reusable component for the bouncing arrow indicator.
  return (
    <a href={href} className="scroll-down-indicator" title={title}>
      <span className="text">{text}</span>
      <span className="icon">⌄</span>
    </a>
  );
};

export default ScrollDownIndicator;
