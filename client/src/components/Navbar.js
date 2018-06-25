import React from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";

const Navbar = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active nav-link" : "nav-link"}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/invite" ? "active nav-link" : "nav-link"}>
      <Link to="/invite">Invite</Link>
    </li>
    <li className={window.location.pathname === "/result" ?"active nav-link" : "nav-link"}>
      <Link to="/result">Result</Link>
    </li>
    <li className={window.location.pathname === "/login" ? "active nav-link" : "nav-link"}>
      <Link  onClick={()=>firebase.auth().signOut()} to="/login">LogOut</Link>
    </li>
  </ul>;

export default Navbar;
