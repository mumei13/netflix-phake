import React from 'react'
import Home from '../pages/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignIn from '../pages/UserPages/SignIn';

const ProtectedRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default ProtectedRoute