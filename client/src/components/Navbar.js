import React from "react";
import { Link } from "react-router-dom";

const Navbar = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active nav-link" : "nav-link"}>
      <Link to="/">Login</Link>
    </li>
    <li className={window.location.pathname === "/home" ? "active nav-link" : "nav-link"}>
      <Link to="/home">Home</Link>
    </li>
    <li className={window.location.pathname === "/invite" ? "active nav-link" : "nav-link"}>
      <Link to="/invite">Invite</Link>
    </li>
    <li className={window.location.pathname === "/result" ?"active nav-link" : "nav-link"}>
      <Link to="/result">Result</Link>
    </li>
  </ul>;

export default Navbar;
