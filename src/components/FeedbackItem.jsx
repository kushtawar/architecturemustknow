import React from 'react';
import { useState } from 'react';

function FeedbackItem({ item }) {
  //More comment
  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
      {/* 
      <button className="center-button" onClick={handleClick}>
        RateNow
      </button>
     */}
    </div>
  );
}

export default FeedbackItem;
