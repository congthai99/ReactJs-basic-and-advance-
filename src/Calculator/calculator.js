import React, { useReducer, useState } from "react";
import "./calculator.scss";

const Calculator = () => {
  const [result, setResult] = useState("");

  // Click one button
  const handleOnClick = (e) => {
    setResult((result) =>
      result.length <= 25 ? result.concat(e.target.name) : result
    );
  };

  // Clear all result
  const handleClear = () => {
    setResult("");
  };

  // Clear one last button
  const handleBackSpace = () => {
    setResult((result) => result.slice(0, -1));
  };

  // Check out result
  const handleResult = () => {
    try {
      if (!result.endsWith("/0")) {
        setResult(eval(result).toString());
      }
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <>
      <div className="container-calculator">
        <div className="calculator">
          <div className="calculator-input">
            <div className="input">{result || "0"}</div>
          </div>
          <div className="calculator-keys">
            <div className="btn-left">
              <button onClick={handleClear} className="btn-calculator-clear ">
                AC
              </button>
              <button onClick={handleBackSpace} className="btn-calculator ">
                c
              </button>
              <button
                name="7"
                onClick={handleOnClick}
                className="btn-calculator"
              >
                7
              </button>
              <button
                name="8"
                onClick={handleOnClick}
                className="btn-calculator"
              >
                8
              </button>
              <button
                name="4"
                onClick={handleOnClick}
                className="btn-calculator"
              >
                4
              </button>
              <button
                name="5"
                onClick={handleOnClick}
                className="btn-calculator"
              >
                5
              </button>
              <button
                name="1"
                onClick={handleOnClick}
                className="btn-calculator"
              >
                1
              </button>
              <button
                name="2"
                onClick={handleOnClick}
                className="btn-calculator"
              >
                2
              </button>
              <button
                name="0"
                onClick={handleOnClick}
                className="btn-calculator-zero"
              >
                0
              </button>
            </div>

            <div className="btn-right">
              <div className="btn-col-left ">
                <button
                  name="/"
                  onClick={handleOnClick}
                  className="btn-calculator"
                >
                  &divide;
                </button>
                <button
                  name="9"
                  onClick={handleOnClick}
                  className="btn-calculator"
                >
                  9
                </button>
                <button
                  name="6"
                  onClick={handleOnClick}
                  className="btn-calculator"
                >
                  6
                </button>
                <button
                  name="3"
                  onClick={handleOnClick}
                  className="btn-calculator"
                >
                  3
                </button>

                <button
                  name="."
                  onClick={handleOnClick}
                  className="btn-calculator-dot "
                >
                  .
                </button>
              </div>
              <div className="btn-col-right ">
                <button
                  name="*"
                  onClick={handleOnClick}
                  className="btn-calculator "
                >
                  &times;
                </button>
                <button
                  name="-"
                  onClick={handleOnClick}
                  className="btn-calculator "
                >
                  &ndash;
                </button>
                <button
                  name="+"
                  onClick={handleOnClick}
                  className="btn-calculator "
                >
                  +
                </button>
                <button
                  onClick={handleResult}
                  className="btn-calculator-result "
                >
                  =
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
