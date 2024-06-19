// src/BackgroundContainer.js
import React, { useState, useEffect } from 'react';

const KeyIdentifier = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      setDisplayText(`Key pressed: ${event.key}`);
    };

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center pointer-events-none">
      <p className="text-gray-500">{displayText}</p>
    </div>
  );
};

export default KeyIdentifier;