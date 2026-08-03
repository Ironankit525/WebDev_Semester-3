import React, { useReducer } from 'react';

const data = {
  input: "",
  list: []
};

function reducer(state, action) {
  switch (action.type) {
    case "inp":
      return {
        ...state,
        input: action.payload
      };

    case "add":
      return {
        ...state,
        list: [...state.list, state.input],
        input: ""
      };

    default:
      return state;
  }
}

const Todo_useresuser = () => {
  const [state, dispatch] = useReducer(reducer, data);

  return (
    <div>
      <input
        value={state.input}
        onChange={(e) =>
          dispatch({ type: "inp", payload: e.target.value })
        }
      />

      <button onClick={() => dispatch({ type: "add" })}>
        Add
      </button>

      <ul>
        {state.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo_useresuser;