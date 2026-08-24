import React from 'react'


import { useEffect } from 'react'
const App = () => {
  useEffect(()=>{
    fetch("http://localhost:3000/").then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
    })
  },[])
  
  return (<>
    
    </>
  )
}

export default App
