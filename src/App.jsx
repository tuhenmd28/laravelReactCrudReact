import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './components/Home'
import UserDetails from './components/UserDetails'
import EditUser from './components/EditUser'
function App() {

  return (
   <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='/userDetails/:id' element={<UserDetails/>} />
        <Route  path='/edit/:id' element={<EditUser/>} />
      </Routes>
   </Router>
  )
}

export default App
