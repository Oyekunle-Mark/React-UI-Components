import React from "react";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <CalculatorDisplay />
      <div className="buttons">
        <div className="keys">
          <ActionButton text="clear" />
          <NumberButton text="7" buttonStyle="number-button" />
          <NumberButton text="8" buttonStyle="number-button" />
          <NumberButton text="9" buttonStyle="number-button" />
          <NumberButton text="4" buttonStyle="number-button" />
          <NumberButton text="5" buttonStyle="number-button" />
          <NumberButton text="6" buttonStyle="number-button" />
          <NumberButton text="1" buttonStyle="number-button" />
          <NumberButton text="2" buttonStyle="number-button" />
          <NumberButton text="3" buttonStyle="number-button" />
          <ActionButton text="0" />
        </div>
        <div className="operation">
          <NumberButton text="/" buttonStyle="number-button" />
          <NumberButton text="X" buttonStyle="number-button" />
          <NumberButton text="-" buttonStyle="number-button" />
          <NumberButton text="+" buttonStyle="number-button" />
          <NumberButton text="=" buttonStyle="number-button" />
        </div>
      </div>
    </div>
  );
};

export default App;
