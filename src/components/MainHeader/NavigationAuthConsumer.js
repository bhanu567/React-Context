import React from "react";

import classes from "./Navigation.module.css";
import AuthContext from "../../store/auth-context";

const Navigation = (props) => {
  return (
    <AuthContext.Consumer>
      {(ctxt) => {
        return (
          <nav className={classes.nav}>
            <ul>
              {ctxt.isLoggedIn && (
                <li>
                  <a href="/">Users</a>
                </li>
              )}
              {ctxt.isLoggedIn && (
                <li>
                  <a href="/">Admin</a>
                </li>
              )}
              {ctxt.isLoggedIn && (
                <li>
                  <button onClick={props.onLogout}>Logout</button>
                </li>
              )}
            </ul>
          </nav>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Navigation;

//to use the authcontextProvider, we have to listen this. and, we can listen this in two ways, either by react hook(more elegent way) or by authcontextConsumer
