import React, { useEffect } from "react";
import { useState } from "react";
import './Zomato.css'
const Zomato = () => {
  let [search, setSearch] = useState("");
  let [data, setData] = useState([]);

  function fun1() {
    if (search.trim() == "") {
      return;
    }
    fetch(`https://dummyjson.com/products/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => console.log(data.products));
  }

  useEffect(() => {
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  let aa = [];

  return (
    <div>
      Zomato
      <input onChange={(e) => setSearch(e.target.value)} />
      <button onClick={fun1}>Search</button>
      <button
        onClick={() => {
          aa = data.sort((a, b) => a.price - b.price);
          setData([...aa]);
        }}
      >
        ass
      </button>
      <button
        onClick={() => {
          aa = data.sort((a, b) => b.price - a.price);
          setData([...aa]);
        }}
      >
        dec
      </button>
      {data.map((e) => {
        return (
          <div key={e.id} className="pro">
            <img src={e.thumbnail} alt="" />
            <p>{e.price}</p>
            <p>{e.title}</p>
            <p>{e.brand}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Zomato;
