import React, { useCallback, useState } from 'react'

import { useMemo } from 'react'
import Child from './Child'
const Memodemo = () => {
//    let totla=0
//     for(let i=0;i<100000000;i++){
//         totla+=i
//     }
    const [count, setcount] = useState(0)

    let totla1=0
    let data=useMemo(()=>{
        for(let i=0;i<100000000;i++){
        totla1+=i

    } return totla1

    },[])
    let demo=()=>{
        console.log("callback")
    }
    let fun1 = useCallback(demo,[])
    localStorage.setItem("key","mai hhu data")
    let gg=localStorage.getItem("key")




    
    

  return (
    <div>
        {/* <h1>{totla}</h1> */}
        <h1>sec  {data}</h1>
       <h2>{count}</h2>
       <button onClick={()=>{setcount(count+1)}}>add</button>
       <h4>{gg}</h4>
       <Child fun1 ={fun1}/>
    </div>
  )
}

export default Memodemo