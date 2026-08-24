import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
const App = () => {
  let [apidata,setapidata]=useState([])
  useEffect(()=>{

    async function api() {
      let res =await axios.get("http://localhost:3000/")
      console.log(res.data);
      setapidata(res.data)
    }
    api()
    // fetch("http://localhost:3000/").then((res)=>{
    //   return res.json()
    // }).then((data)=>{
    //   setapidata(data)
    // })
  },[])
  
  return (<>
    {
      apidata.map((val)=>{
        return(<>
        <div key={val.id}>
            <h1>ID: {val.id}</h1>
            <h1>Brand: {val.brand}</h1>
            <h1>Name: {val.name}</h1>
            <h1>price: {val.price}</h1>
          </div>
        </>)
      })
    }
    </>
  )
}

export default App
