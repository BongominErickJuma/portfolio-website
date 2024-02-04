import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const handleToggle = () => {
    document.body.classList.toggle("nav-open");
  };

  const handleRemove = () => {
    document.body.classList.remove("nav-open");
  };

  return (
    <div className="nav-container">
      <header>
        <div className="logo">
          <h2 className="coral">BEJ</h2>
        </div>
        <button className="nav-toggle" onClick={handleToggle}>
          <span className="hamburger"></span>
        </button>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link" onClick={handleRemove}>
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/projects"
                className="nav__link"
                onClick={handleRemove}
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
