import React, { useState } from "react";
import "./calculator.scss";

const Calculator = () => {
  const [result, setResult] = useState("");
  // Click one button and check max input
  const handleOnClick = (e) => {
    if (
      (["/", "-", "*", "+"].includes(e.target.name) && result.length > 0) ||
      !["/", "-", "*", "+"].includes(e.target.name)
    ) {
      if (result.length <= 25) {
        const reg = /\/|\*|\+|-$/g;
        const reg2 = /^[\/|\*|\+|-]/g;
        if (!reg.test(result) || !reg2.test(e.target.name)) {
          setResult((result) => {
            return result.concat(e.target.name);
          });
        } else {
          if (
            ["/", "-", "*", "+"].includes(result[result.length - 1]) &&
            result[result.length - 1] !== e.target.name
          ) {
            let str = result.replace(
              new RegExp(/(\/|\*|\+|-)$/),
              e.target.name
            );
            console.log(str);
            setResult(str);
          }

          if (
            ["/", "-", "*", "+"].includes(e.target.name) &&
            !["/", "-", "*", "+"].includes(result[result.length - 1])
          ) {
            setResult((result) => result.concat(e.target.name));
          }
        }
      } else {
        setResult("error");
        setTimeout(() => {
          setResult("");
        }, 1000);
      }
    }
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
      setResult("error");
      setTimeout(() => {
        setResult("");
      }, 1000);
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
