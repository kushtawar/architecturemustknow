import React from 'react';
import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(8);
  const [text, setText] = useState(
    'Lorem ipsum dolor sit, praesentium? Lorem ipsum dolor sit, praesentium?'
  );
  /*  const handleClick = () => {
    //console.log('previous rating was ' + prev);
    setRating((prev) => {
      console.log('previous rating was ' + prev);
      return prev + 1;
    });
  }; */

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      {/* 
      <button className="center-button" onClick={handleClick}>
        RateNow
      </button>
     */}
    </div>
  );
}

export default FeedbackItem;
