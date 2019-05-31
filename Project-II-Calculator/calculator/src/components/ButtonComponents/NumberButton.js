import React from "react";
import "./Button.css";

const NumberButton = ({ text, buttonStyle, handleClick, handleEvaluate }) => {
  const clickEvent = handleClick || handleEvaluate;
  return (
    <button onClick={() => clickEvent(text)} className={buttonStyle}>
      {text}
    </button>
  );
};

export default NumberButton;
