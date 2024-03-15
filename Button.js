import React from "react";
import "./Button.css";

const Button = (props) => {
  // Conditionally set the class name based on props and state
  const buttonClassName =
    props.type === "submit" && props.children === "Add Goal" && !props.disabled
      ? "button"
      : "red button";

  return (
    <button
      type={props.type}
      className={buttonClassName}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
