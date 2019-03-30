import React, { Component } from "react";
/* Components */
import Display from "./Display";
/* Style */
import "./style.css";
import Keypad from "./Keypad";

class Calculator extends Component {
  state = {
    // value to be displayed in <Display />
    displayValue: "0",
    // values to be displayed in number <Keys />
    numbers: ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "ce"],
    // values to be displayed in operator <Keys />
    operators: ["/", "x", "-", "+"],
    // operator selected for math operation
    selectedOperator: "",
    // stored value to use for math operation
    storedValue: ""
  };

  callOperator = () => {
    console.log("call operation");
  };

  setOperator = () => {
    console.log("set operation");
  };

  updateDisplay = () => {
    console.log("update display");
  };

  render = () => {
    const {
      displayValue,
      numbers,
      operators,
      selectedOperator,
      storedValue
    } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad
          updateDisplay={this.updateDisplay}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          callOperator={this.callOperator}
        />
      </div>
    );
  };
}

export default Calculator;
