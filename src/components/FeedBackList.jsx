import FeedbackItem from './FeedbackItem';

function FeedBackList({ feedback }) {
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

export default FeedBackList;
