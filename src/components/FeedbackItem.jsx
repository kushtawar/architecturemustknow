import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  //More comment
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes className="faicons" />
      </button>

      <button onClick={() => editFeedback(item)} color="red" className="edit">
        <FaEdit className="faicons" />
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
