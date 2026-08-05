import React from "react";
import { useReducer } from "react";
function reduser(state, action) {
  if (action.type == "inc") {
    return state + 1;
  } else if (action.type == "sub") {
    return state - 1;
  } else if (action.type == "reset") {
    return (state = 0);
  } else {
    return state;
  }
}
const Usereduser = () => {
  const [state, dispatch] = useReducer(reduser, 0);//hola
  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dispatch({ type: "sub" });
        }}
      >
        sub
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        resrt
      </button>
    </div>
  );
};

export default Usereduser;
