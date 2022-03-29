import React from "react";
import "./calculator.scss";

const Calculator = () => {
  return (
    <>
      <div className="container">
        <div className="calculator">
          <div className="calculator-input">
            <input type="text" className="input" />
          </div>
          <div className="calculator-keys">
            <div className="btn-left">
              <button className="btn-calculator-clear">AC</button>

              <button className="btn-calculator">7</button>
              <button className="btn-calculator">8</button>
              <button className="btn-calculator">4</button>
              <button className="btn-calculator">5</button>
              <button className="btn-calculator">1</button>
              <button className="btn-calculator">2</button>

              <button className="btn-calculator-zero">0</button>
            </div>

            <div className="btn-right">
              <div className="btn-col-left">
                <button className="btn-calculator">/</button>
                <button className="btn-calculator">9</button>
                <button className="btn-calculator">6</button>
                <button className="btn-calculator">3</button>
                <button className="btn-calculator-dot">.</button>
              </div>
              <div className="btn-col-right">
                <button className="btn-calculator">x</button>
                <button className="btn-calculator">-</button>
                <button className="btn-calculator">+</button>
                <button className="btn-calculator-result">=</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
