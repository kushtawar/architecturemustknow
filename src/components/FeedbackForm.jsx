import { useState, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedbackForm({}) {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      console.log(feedbackEdit.item.text);
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
    // Perform side effects here
  }, [feedbackEdit]); // Dependency array can control when the effect runs

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null)

      // prettier-ignore
    } else if (text.trim().length < 10) {
      // 👈 check for less than 10
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How do you rate our services?</h2>

        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            type="text"
            onChange={handleTextChange}
            placeholder="Write a Review"
            value={text}
          />
          <Button
            type={'submit'}
            version={'secondary'}
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
