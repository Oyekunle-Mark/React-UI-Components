import React from "react";
import "./Display.css";

const CalculatorDisplay = ({ displayText }) => (
  <p className="display">{displayText || 0}</p>
);

export default CalculatorDisplay;
