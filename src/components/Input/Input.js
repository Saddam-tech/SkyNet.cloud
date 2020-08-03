import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "textarea":
      inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} />;
      break;
  }

  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
