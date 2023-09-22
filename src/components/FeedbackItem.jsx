import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';

function FeedbackItem({ item }) {
  const handleDelete = () => {
    console.log('123');
  };

  //More comment
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={handleDelete} className="close">
        <FaTimes />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
