import React from 'react'
import { useParams } from 'react-router-dom'
const Productinfo = () => {
    const cars = [
    {
      id: 1,
      name: "Model S",
      brand: "Tesla"
    },
    {
      id: 2,
      name: "Mustang",
      brand: "Ford"
    },
    {
      id: 3,
      name: "Civic",
      brand: "Honda"
    },
    {
      id: 4,
      name: "Corolla",
      brand: "Toyota"
    },
    {
      id: 5,
      name: "X5",
      brand: "BMW"
    }
  ];

   let data=  cars.find((a)=>{
    
       return a.id==id
     })
    

  return (
    <div>
        <div>{data.name}
            console.log("dataaaaa")
        </div>
    </div>
  )
}

export default Productinfo