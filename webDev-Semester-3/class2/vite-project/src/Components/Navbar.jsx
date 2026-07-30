import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import About from './About'

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/about">About</Link> | {" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default Navbar