import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

/* 
const cors = require('cors')
// Create your JSON server instance
const jsonServer = require('json-server')
const server = jsonServer.create()

// Use the 'cors' middleware to enable CORS
server.use(cors())

// ...

// Start your JSON server on port 5000
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000')
})
//
 */
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState([
    {
      item: {},
      edit: false,
    },
  ])

  useEffect(() => {
    fetchFeedback()
  }, []) // Dependency array can control when the effect runs

  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    )
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  const addFeedback1 = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    /* const myarray = Object.values(newFeedback);*/
    setFeedback([newFeedback, ...feedback])
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }
  // Update feedback item
  /* const updateFeedback1 = (id, updItem) => {
    //console.log(id, updItem);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  }; */

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    // NOTE: no need to spread data and item
    setFeedback(feedback.map((item) => (item.id === id ? data : item)))

    // FIX: this fixes being able to add a feedback after editing
    // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        addFeedback,
        editFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext

/* export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    // NOTE: no need to spread data and item
    setFeedback(feedback.map((item) => (item.id === id ? data : item)));

    // FIX: this fixes being able to add a feedback after editing
    // credit to Jose https://www.udemy.com/course/react-front-to-back-2022/learn/lecture/29768200#questions/16462688
    setFeedbackEdit({
      item: {},
      edit: false,
    });
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext; */
