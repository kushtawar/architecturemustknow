import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is from context 1',
      rating: 9,
    },
    {
      id: 2,
      text: 'This is from context 2',
      rating: 8,
    },
  ])
  const [feedbackEdit, setFeedbackEdit] = useState([
    {
      item: {},
      edit: false,
    },
  ])
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    console.log(newFeedback)
    /* const myarray = Object.values(newFeedback);*/
    setFeedback([newFeedback, ...feedback])
  }

  // Update feedback item
  const updateFeedback = (id, updItem) => {
    //console.log(id, updItem);
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  const deleteFeedback = (id) => {
    /* console.log('App', id); */
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
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
