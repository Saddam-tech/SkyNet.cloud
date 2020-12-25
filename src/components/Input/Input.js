import React from "react";
import classes from "./Input.module.css";
import TextField from "@material-ui/core/TextField";

const input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case "email":
      inputElement = (
        <TextField
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
        />
      );
      break;
    case "password":
      inputElement = (
        <TextField
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
        />
      );
      break;
    case "textarea":
      inputElement = (
        <TextField
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          autoFocus
           
        />
      );
      break;
    default:
      inputElement = (
        <TextField
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
          variant="outlined"
          margin="normal"
          required
          fullWidth
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
