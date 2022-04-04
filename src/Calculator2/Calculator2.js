import React, { useReducer, useEffect } from "react";
import "./Calculator2.scss";

const initialState = {
  operator: ["+", "-"],
  calculate: "",
};

function reducer(state, action) {
  const { calculate, operator } = state;
  console.log("calculate:", calculate);
  switch (action.type) {
    case "handleOnClickButton":
      return {
        calculate: state.calculate.concat(action.payload),
      };

    case "handleClear":
      return { calculate: "" };

    case "handleOnClickButtonPlus":
      const reg = /d\/|\*|\+|$/g;
      if (state.calculate > 0 || state.calculate == "") {
        return {
          calculate: state.calculate.concat(action.payload),
        };
      } else if (action.payload == "+" && state.calculate > 0) {
        return { calculate: "+" };
      }

    case "handleOnClickButtonDash":
      return {
        calculate: state.calculate.concat(action.payload),
      };

    case "handleBackSpace":
      return { calculate: calculate.slice(0, -1) };

    case "handleResult":
      try {
        if (!calculate.endsWith("/0")) {
          return { calculate: eval(calculate).toString() };
        }
      } catch (error) {
        return state;
      }
    default:
      throw Error(error.message);
  }

  return state;
}

function CalculatorUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <div className="calculator2">
        <div className="input">{state.calculate || "0"}</div>
        <div className="keys">
          <button
            className="btn-clear"
            onClick={() => dispatch({ type: "handleClear" })}
          >
            AC
          </button>
          <button onClick={() => dispatch({ type: "handleBackSpace" })}>
            c
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "/" })
            }
          >
            &divide;
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "*" })
            }
          >
            &times;
          </button>

          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "7" })
            }
          >
            7
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "8" })
            }
          >
            8
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "9" })
            }
          >
            9
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButtonDash", payload: "-" })
            }
          >
            &ndash;
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "4" })
            }
          >
            4
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "5" })
            }
          >
            5
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "6" })
            }
          >
            6
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButtonPlus", payload: "+" })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "1" })
            }
          >
            1
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "2" })
            }
          >
            2
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "3" })
            }
          >
            3
          </button>
          <button
            onClick={() => dispatch({ type: "handleResult" })}
            className="btn-result"
          >
            =
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "0" })
            }
            className="btn-zero"
          >
            0
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickButton", payload: "." })
            }
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorUseReducer;
