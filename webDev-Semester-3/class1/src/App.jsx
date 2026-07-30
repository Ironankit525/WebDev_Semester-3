import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setcount] = useState(0);
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setdata(data);
      });
  }, []);



  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => setcount(count + 1)}>add</button>
      <button onClick={() => setcount(count - 1)}>sub</button>
      <button onClick={() => setcount(0)}>reset</button>

      {data.map((a) => (

        <p key={a.id} >{a.id},{a.title},<button>delete</button></p>

      ))}
    </div>
  );
};

export default App;