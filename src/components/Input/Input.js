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
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
      );
      break;
    case "password":
      inputElement = (
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
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
          label="Email"
          name="Email"
          autoComplete="password"
          autoFocus
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
