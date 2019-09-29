import React from "react";
import { NavLink } from "react-router-dom";

const Nav = ({ toggleLogin, user, logout }) => {
  return (
    <ul>
      <NavLink exact to={"/"} activeClassName="active" className="link">
        Home
      </NavLink>
      <NavLink to={"/exerciseList"} activeClassName="active" className="link">
        Exercises
      </NavLink>
      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={toggleLogin}>Login</button>
      )}
    </ul>
  );
};

export default Nav;
