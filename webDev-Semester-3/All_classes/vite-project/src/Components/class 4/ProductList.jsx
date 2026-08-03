import React from 'react';
import { Link, Routes, Route } from 'react-router-dom'
import Productinfo from './class4/Productinfo';
import { useNavigate } from 'react-router-dom';
const ProductList = () => {
  let navi=useNavigate();
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

  function fun1(id){
    navi(`/p/${id}`)
    console.log("hhh")
  }

  return (
    <div>
      {cars.map((a) => (
        <div key={a.id}>
          <li onClick={()=>fun1(a.id)}>{a.name}</li>
        </div>
      ))}

      <Link to='/P'>ProductList</Link>

      <Routes>
        <Route path='/p/:id' element={<Productinfo/>}></Route>
      </Routes>
      
    </div>
  );
};

export default ProductList;