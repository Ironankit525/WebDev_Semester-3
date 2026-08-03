import React from 'react'
import './card.css'
const Card = ({name,roll,co}) => {
  return (
    <>
    <div className='card'>
        <div className='info' >
        <img className='img' src="https://plus.unsplash.com/premium_photo-1682096181675-12f8293cd31e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <h3>name {name} </h3>
        <h3>roll {roll} </h3>
        <h3>course {co} </h3>
        </div>
    </div>
    </>
  )
}

export default Card