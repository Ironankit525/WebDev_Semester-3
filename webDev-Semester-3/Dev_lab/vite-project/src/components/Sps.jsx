import React, { useReducer } from "react";

const initialState = {
  user: "",
  computer: "",
  result: ""
};

function reducer(state, action) {
  let computer = ["stone", "paper", "scissor"][
    Math.floor(Math.random() * 3)
  ];

  let result = "";

  if (action.payload === computer) {
    result = "Draw";
  } 
  else if (
    (action.payload === "stone" && computer === "scissor") ||
    (action.payload === "paper" && computer === "stone") ||
    (action.payload === "scissor" && computer === "paper")
  ) {
    result = "You Win";
  } 
  else {
    result = "Computer Win";
  }

  return {
    user: action.payload,
    computer: computer,
    result: result
  };
}

const Sps = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button onClick={() => dispatch({ type: "play", payload: "stone" })}>
        🥌
      </button>

      <button onClick={() => dispatch({ type: "play", payload: "paper" })}>
        📄
      </button>

      <button onClick={() => dispatch({ type: "play", payload: "scissor" })}>
        ✂️
      </button>

      <p>User: {state.user}</p>
      <p>Computer: {state.computer}</p>
      <p>Result: {state.result}</p>
    </div>
  );
};

export default Sps;