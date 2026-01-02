import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Resume from './pages/Resume'

function App() {

  return (
    <>
<Router>
  <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/contact' element={<Contact />} />
       <Route path='/skill' element={<Skills /> }/>
       <Route path='/resume' element={<Resume />} />
  </Routes>
</Router>
    </>
  )
}

export default App
