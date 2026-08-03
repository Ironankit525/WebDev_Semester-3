import React from "react";
import { useState } from "react";
import Card from "./components/Card";
import'./App.css'
const App = () => {
  const [count, setcount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>
      <button
        onClick={() => {
          if (count < 10) {
            setcount(count + 1);
          }
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setcount(count - 1);
          }
        }}
      >
        sub
      </button>
      <div>
           <Card  name='abc' roll={10} co='eng' />
           <Card name='abc1' roll={11} co='eng' />
           <Card name='abc2' roll={12} co='eng' />
      </div>
    </div>
  );
};

export default App;
