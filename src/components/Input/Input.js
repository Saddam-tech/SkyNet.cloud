import React from "react";
import classes from "./Input.module.css";

const input = () => {
  let inputElement = null;

  switch (props.elementType) {
    case "input":
      inputElement = <input {...props.elementConfig} value={} onChange={} />;
      break;
    case "select":
      inputElement = (
        <select {...props.elementConfig} value={} onChange={}></select>
      );
      break;
      default:
        inputElement = <input {...props.elementConfig} value={} onChange={} />;
  }

  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
