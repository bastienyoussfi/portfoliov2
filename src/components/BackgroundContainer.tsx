// src/BackgroundContainer.js
import React, { useState, useEffect } from 'react';

const BackgroundContainer = () => {

  return (
    <div>
        <div className="absolute top-[185px] left-36 w-96 h-24 border-2 border-gray-500"></div>
        <div className="absolute top-[155px] left-[558px] w-32 h-0 border-[1px] border-gray-500 opacity-75"></div>
        <div className="absolute top-[155px] left-[686px] w-0 h-[76px] border-[1px] border-gray-500 opacity-75"></div>
        <div className="absolute top-[120px] left-[1105px] w-0 h-[350px] border-[1px] border-gray-500 opacity-75"></div>
    </div>
  );
};

export default BackgroundContainer;