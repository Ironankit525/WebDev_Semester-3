
import './App.css'
import Home from './home'
import About from './About'
import Login from './Login'
import React from 'react'
import { Routes ,Route, Link } from 'react-router-dom'
function App() {
  return (

    <>
    
    <ul className="nav">
      <Link to={'/'}>
      <li>home</li>
      </Link>
      <Link to={'/about'}>
      <li>about</li>
      </Link>
      <Link to={'/login'}>
      <li>login</li>
      </Link>

       
       {/* hell0 */}
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/login' element={<Login/>}/>
      

      
    </Routes>
    </>
  )
}

export default App