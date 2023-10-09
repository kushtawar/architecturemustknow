import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'
import { useState } from 'react'
import FeedbackStats from './components/FeedbackStats'
import FeedBackList from './components/FeedBackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import NotFoundPage from './components/pages/NotFoundPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="All New Architecture Bytes.." />

        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedBackList />
                </>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
