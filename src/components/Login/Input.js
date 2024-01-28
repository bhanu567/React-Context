import React from "react";

import Button from "../UI/Button/Button";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <React.Fragment>
      <div
        className={`${classes.control} ${
          props.emailState.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor="email">E-Mail</label>
        <input
          type="email"
          id="email"
          value={props.emailState.value}
          onChange={props.changeEmail}
          onBlur={props.validateEmail}
        />
      </div>
      <div
        className={`${classes.control} ${
          props.passwordState.isValid === false ? classes.invalid : ""
        }`}
      >
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={props.passwordState.value}
          onChange={props.passwordChange}
          onBlur={props.validatePassword}
        />
      </div>
      <div className={classes.actions}>
        <Button
          type="submit"
          className={classes.btn}
          disabled={!props.isFormValid}
        >
          Login
        </Button>
      </div>
    </React.Fragment>
  );
};

export default Input;
