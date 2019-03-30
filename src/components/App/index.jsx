import React, { Component } from "react";
/* Components */
import Calculator from "../Calculator";
/* Styles */
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Calculator />
      </div>
    );
  }
}

export default App;
