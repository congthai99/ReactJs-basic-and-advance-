import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/functionComponent">FunctionComponent</NavLink>
      <NavLink to="/classComponent">ClassComponent</NavLink>
      <NavLink to="/useReducer">ByUseReducer</NavLink>
      <NavLink to="/redux">ByRedux</NavLink>
      <NavLink to="/calculator">Calculator</NavLink>
    </div>
  );
};

export default Nav;
