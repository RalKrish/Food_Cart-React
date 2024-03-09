import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
const Header = () => {
  return (
    <div className="navBar">
      <div className="logo">Food Cart</div>
      <ul>
        <li>
          <Link to={"/"}> Home </Link>
          { /*almost equivalent to this one anchor tag <a href="/">Home</a>  */}
        </li>

        <li>
          <Link to={"/Cart"}> View Cart </Link>

        </li>
      </ul>
    </div>
  );
};

export default Header;
