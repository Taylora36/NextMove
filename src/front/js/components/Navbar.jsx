import React from "react";
import { NavLink } from "react-router-dom";
import LogoSVG from "./LogoSVG.jsx";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <header>
      <NavLink to="/">
        <LogoSVG />
      </NavLink>
      <nav>
        <ul className="nav__links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
            <NavLink to="/explore">Explore</NavLink>
          </li>
          <li>
            <NavLink to="/login" className="login__button no__effect">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
