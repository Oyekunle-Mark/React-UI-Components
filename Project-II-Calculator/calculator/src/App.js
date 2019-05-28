import React, { Component } from "react";
import math from "mathjs";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import "./App.css";

const keys = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
const operators = ["/", "*", "-", "+"];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: ""
    };

    this.inputHandler = this.inputHandler.bind(this);
    this.clearHandler = this.clearHandler.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }

  inputHandler(val) {
    // this.state.total = this.state.total.replace(/^0+$/, '');

    this.setState({
      total: this.state.total.concat(val).replace(/^0+$/, ''),
    });
  }

  clearHandler() {
    this.setState({
      total: ""
    });
  }

  evaluate() {
    try {
      this.setState({
        total: String(math.eval(this.state.total))
      });
    } catch (e) {
      return;
    }
  }

  render() {
    return (
      <div className="app">
        <CalculatorDisplay displayText={this.state.total} />
        <div className="buttons">
          <div className="keys">
            <ActionButton text="clear" handleClear={this.clearHandler} />
            {keys.map(item => (
              <NumberButton
                key={item}
                text={item}
                buttonStyle="number-button"
                handleClick={this.inputHandler}
              />
            ))}
            <ActionButton text="0" handleClick={this.inputHandler} />
          </div>

          <div className="operation">
            {operators.map(item => (
              <NumberButton
                key={item}
                buttonStyle="number-button"
                text={item}
                handleClick={this.inputHandler}
              />
            ))}

            <NumberButton
              text="="
              buttonStyle="number-button"
              handleEvaluate={this.evaluate}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
