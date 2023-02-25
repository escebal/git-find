import React from "react";
import "./Button.css";

function Button({ onClick }) {
  return (
    <button className="buttonContent" onClick={onClick}>
      Hola
    </button>
  );
}

export default Button;
