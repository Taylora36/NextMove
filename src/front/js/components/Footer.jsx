import React from "react";
import { NavLink, useLocation } from "react-router-dom";

// Styles & Assets
import LogoSVG from "../components/LogoSVG.jsx";

export const Footer = () => {
  const location = useLocation();
  return (
    <footer className={location.pathname !== "/" ? "d-none" : ""}>
      <div className="nav__footer">
        <nav>
          <ul className="nav__links">
            <li>
              <NavLink to="/" className="no__effect">
                <LogoSVG />
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <a href="#contact">Contact</a>
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
      </div>
    </footer>
  );
};
