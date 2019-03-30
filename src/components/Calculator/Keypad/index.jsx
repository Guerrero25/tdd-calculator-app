import React from "react";
import PropTypes from "prop-types";
/* Styles */
import "./style.css";
import Key from "../Key";

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay
}) => {
  const numbersKeys = numbers.map(number => (
    <Key
      key={number}
      keyValue={number}
      keyType="number-key"
      keyAction={updateDisplay}
    />
  ));
  const operatorsKeys = operators.map(operator => (
    <Key
      key={operator}
      keyValue={operator}
      keyType="operator-key"
      keyAction={setOperator}
    />
  ));

  return (
    <div className="keypad-container">
      <div className="numbers-container">{numbersKeys}</div>
      <div className="operators-container">{operatorsKeys}</div>
      <div className="submit-container">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired
};

export default Keypad;
