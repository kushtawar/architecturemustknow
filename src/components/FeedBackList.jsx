import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedBackList({ feedback, deletehandle }) {
  console.log(feedback.FeedBackList);
  //return <div>{feedback.map((item) => item.id)}</div>;
  return (
    <div>
      {feedback.map((item) => (
        <div key={item.id}>
          {/* {item.id} {item.text} */}
          <FeedbackItem item={item} />
        </div>
      ))}
    </div>
  );
}

FeedBackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedBackList;
