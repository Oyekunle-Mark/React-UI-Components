import React from "react";
import "./Button.css";

const ActionButton = ({ text, handleClick, handleClear }) => {
  const clickEvent = handleClick || handleClear;

  return (
    <button onClick={() => clickEvent(text)} className="action-button">
      {text}
    </button>
  );
};

export default ActionButton;
