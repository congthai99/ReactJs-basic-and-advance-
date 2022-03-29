import React, { useReducer } from "react";
import "../App.scss";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const ByUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="container">
        <h1 className="container-heading">Counting By useReduce</h1>
        <button onClick={() => dispatch({ type: "increment" })}>
          <span>Increase</span>
        </button>
        <p className="couting"> Is counting {state.count}</p>
        <button onClick={() => dispatch({ type: "decrement" })}>
          <span>Decrease</span>
        </button>
      </div>
    </>
  );
};

export default ByUseReducer;
