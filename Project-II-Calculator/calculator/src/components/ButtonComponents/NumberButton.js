import React from "react";
import "./Button.css";

const NumberButton = ({ text, buttonStyle }) => (
  <button className={buttonStyle}>{text}</button>
);

export default NumberButton;
