import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./components/pages/Home";
// import Result from "./components/pages/Result";
import Login from "./components/pages/Login";
// import Invite from "./components/pages/Invite";

const App = () =>
  <Router>
    <div className="App">
      <Route exact path="/" component={Login} />
    </div>
  </Router>;
export default App;