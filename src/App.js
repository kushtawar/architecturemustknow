import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackData from './data/FeedbackData';
import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="Header Text" />
      <div className="container">
        <FeedbackItem />
      </div>
    </>
  );
}

/* function App() {
  const coursename = 'DevOps Transformation using Real project implementation';

  const loading = false;
  const showComments = true;
  const body =
    'This is my blogpost on my travels to beautiful countries and then learn '.concat(
      coursename
    );
  const comments = [
    {
      id: 1,
      country: 'France',
      cities: ['Paris', 'Lille', 'Dijon'],
      text: "France is known for its rich architectural heritage and some of the world's most iconic and historic buildings",
    },
    {
      id: 2,
      country: 'Germany',
      cities: ['Berlin', 'Hamburg', 'Stuttgart'],
      text: 'Germany, a land of captivating contrasts, beckons travelers with its rich tapestry of culture, history, and natural beauty',
    },
    {
      id: 3,
      country: 'India',
      cities: ['Delhi', 'Mumbai', 'Kolkata'],
      text: "India's culture is often likened to a mosaic because it is composed of various intricate and colorful elements, traditions, and facets that come together to create a harmonious and vibrant whole",
    },
  ];

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const commentBlock = (
    <div className="Container">
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="Container">
      <h1>Let's understand {coursename}</h1>
      <p>..Main Purpose.. {body}</p>
      {showComments && commentBlock}
    </div>
  );
} */

export default App;
