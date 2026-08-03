import React from 'react'
import Pizza from './Pizza'
import Burger from './class 3/Burger'
import { Link,  Route, Routes } from 'react-router-dom'
const Menue = () => {
  return (
    <div>
        <div>
        <Link to='/burger'>
        bugger
        </Link>

        <Link to='/pizza'>
        Pizza
        </Link>
        </div>
        <Routes>
            <Route path="/pizza" element={<Pizza/>}></Route>
            <Route path="/burger" element={<Burger/>}></Route>
        </Routes>
    </div>
  )
}

export default Menue