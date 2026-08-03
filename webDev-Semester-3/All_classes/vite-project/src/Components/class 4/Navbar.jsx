import React from 'react'
import './nav.css'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './class 3/Home'
import Login from './class 3/Login'
import About from './class 3/About'
import Projects from './Projects'
import Resume from './Resume'
import Services from './Services'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link> 
        <Link to="/login">Login</Link>
        <Link to='/services'>Services</Link>
        <Link to='/resume'>Resume</Link>
        <Link to='/projects'>Project</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  )
}

export default Navbar