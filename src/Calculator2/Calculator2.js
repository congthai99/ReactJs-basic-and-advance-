import React, { useReducer } from "react";
import "./Calculator2.scss";

const initialState = {
  formula: "",
  currentSign: "",
};

function reducer(state, action) {
  const { currentSign, formula } = state;
  switch (action.type) {
    case "handleOnClickNumber":
      if (currentSign.length <= 20 && formula.length <= 20) {
        if (
          ["/", "-", "*", "+"].includes(currentSign[currentSign.length - 1])
        ) {
          return {
            formula: formula.concat(action.payload),
            currentSign: action.payload,
          };
        } else if (["0"].includes(currentSign[currentSign.length - 1])) {
          return {
            formula: action.payload,
            currentSign: action.payload,
          };
        } else {
          return {
            formula: formula.concat(action.payload),
            currentSign: currentSign.concat(action.payload),
          };
        }
      } else {
        return {
          formula: formula,
          currentSign: "Full",
        };
      }

    case "handleOnClickPOperators":
      if (
        ["/", "-", "*", "+"].includes(formula[formula.length - 1]) &&
        ["/", "-", "*", "+"].includes(action.payload)
      ) {
        if (
          ["/", "*", "+", "-"].includes(formula[formula.length - 1]) &&
          formula[formula.length - 1] !== action.payload
        ) {
          let newFormula = formula.replace(
            new RegExp(/(\/|\*|\+|-)$/),
            action.payload
          );
          return {
            formula: newFormula,
            currentSign: action.payload,
          };
        } else {
          return {
            formula: formula,
            currentSign: action.payload,
          };
        }
      } else {
        return {
          formula: state.formula.concat(action.payload),
          currentSign: action.payload,
        };
      }

    case "handleOnClickDot":
      console.log(action.payload);
      if (
        ["."].includes(currentSign[currentSign.length - 1]) &&
        ["."].includes(action.payload)
      ) {
        return {
          formula: formula,
          currentSign: currentSign,
        };
      } else if (currentSign === "") {
        const newFormula = "0".concat(action.payload);
        return {
          formula: newFormula,
          currentSign: newFormula,
        };
      } else if (currentSign !== "") {
        return {
          formula: formula.concat(action.payload),
          currentSign: currentSign.concat(action.payload),
        };
      }

    case "handleResult":
      try {
        if (!formula.endsWith("/0")) {
          return {
            formula: eval(formula).toString(),
            currentSign: eval(formula).toString(),
          };
        }
      } catch (error) {
        return state;
      }

    case "handleClear":
      return {
        currentSign: "",
        formula: "",
      };

    case "handleBackSpace":
      return { currentSign: currentSign.slice(0, -1) };

    case "handleResult":
      try {
        if (!currentSign.endsWith("/0")) {
          return { currentSign: eval(currentSign).toString() };
        }
      } catch (error) {
        return state;
      }
    default:
      return state;
  }
}

function CalculatorUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container-calculator2">
      <div className="calculator2">
        <div className="input">{state.formula || ""}</div>
        <div className="input">{state.currentSign || "0"}</div>
        <div className="keys">
          <button
            className="btn-clear"
            onClick={() => dispatch({ type: "handleClear" })}
          >
            AC
          </button>
          <button
            style={{ backgroundColor: "rgb(102,102,102)" }}
            onClick={() => dispatch({ type: "handleBackSpace" })}
          >
            c
          </button>
          <button
            style={{ backgroundColor: "rgb(102,102,102)" }}
            onClick={() =>
              dispatch({ type: "handleOnClickPOperators", payload: "/" })
            }
          >
            &divide;
          </button>
          <button
            style={{ backgroundColor: "rgb(102,102,102)" }}
            onClick={() =>
              dispatch({ type: "handleOnClickPOperators", payload: "*" })
            }
          >
            &times;
          </button>

          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "7" })
            }
          >
            7
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "8" })
            }
          >
            8
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "9" })
            }
          >
            9
          </button>
          <button
            style={{ backgroundColor: "rgb(102,102,102)" }}
            onClick={() =>
              dispatch({ type: "handleOnClickPOperators", payload: "-" })
            }
          >
            &ndash;
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "4" })
            }
          >
            4
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "5" })
            }
          >
            5
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "6" })
            }
          >
            6
          </button>
          <button
            style={{ backgroundColor: "rgb(102,102,102)" }}
            onClick={() =>
              dispatch({ type: "handleOnClickPOperators", payload: "+" })
            }
          >
            +
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "1" })
            }
          >
            1
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "2" })
            }
          >
            2
          </button>
          <button
            onClick={() =>
              dispatch({ type: "handleOnClickNumber", payload: "3" })
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
              dispatch({ type: "handleOnClickNumber", payload: "0" })
            }
            className="btn-zero"
          >
            0
          </button>
          <button
            onClick={() => dispatch({ type: "handleOnClickDot", payload: "." })}
          >
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorUseReducer;
