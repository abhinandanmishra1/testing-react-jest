import React from "react";
import "./styles.css";
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src="https://files.codingninjas.in/cn-logo-dark-9824.svg" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Courses</li>
        <li className="nav-item">Practice</li>
      </ul>
    </div>
  );
};

export default Navbar;
