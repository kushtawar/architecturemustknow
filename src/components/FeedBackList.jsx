import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import Spinner from './shared/Spinner';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';

function FeedBackList({}) {
  const { feedback, isLoading } = useContext(FeedbackContext);

  const feedbackcount = Object.keys(feedback).length;

  if (!isLoading && !feedbackcount) {
    return <div>No feedback yet</div>;
  }

  //return <div>{feedback.map((item) => item.id)}</div>;

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            layout
          >
            <FeedbackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  /* return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <div>
          <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        </div>
      ))}
    </div>
  ); */
}

export default FeedBackList;
