import React, { useReducer } from "react";

const data = {
  input: "",
  list: []
};

function reducer(state, action) {
  if (action.type === "inp") {
    return {
      ...state,
      input: action.payload
    };
  }

  else if (action.type === "add") {
    if (state.input.trim() === "") return state;

    return {
      ...state,
      list: [...state.list, state.input],
      input: ""
    };
  }

  else if (action.type === "delete") {
    return {
      ...state,
      list: state.list.filter((_, index) => index !== action.payload)
    };
  }

  return state;
}

const Todo_useresuser = () => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <div>
      <input
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "inp",
            payload: e.target.value
          })
        }
      />

      <button onClick={() => dispatch({ type: "add" })}>
        Add
      </button>

      <ul>
        {state.list.map((item, index) => (
          <li
            key={index}
            onClick={() =>
              dispatch({
                type: "delete",
                payload: index
              })
            }
           
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_useresuser;