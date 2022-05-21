import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="container">
        <span className="l1">
          <Link to="/">Home</Link>
        </span>
        <span className="l2">
          <Link to="/searchPage">Check the weather</Link>
        </span>
      </div>
    </div>
  );
}

export default Nav;
