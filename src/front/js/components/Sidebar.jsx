import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";
import { AiFillCar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

export const Sidebar = (props) => {
  const location = useLocation()
  return (
    <nav className={location.pathname == "/" ? "d-none" : "sidebar"}>
      <ul className="sidebar-nav">
        <li className="logo">
          <a href="#" className="sidebar-link">
            <span className="link-text-logo-text">
              <AiFillCar />
            </span>
          </a>
        </li>
        <li className="sidebar-item">
          <NavLink to="/" href="#" className="sidebar-link">
            <span className="sidebar-icon">
              <AiFillCar />
            </span>
            <span className="link-text">Home</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/explore" href="#" className="sidebar-link">
            <span className="sidebar-icon">
              <BiSearch />
            </span>
            <span className="link-text">Search</span>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <NavLink to="/compare" href="#" className="sidebar-link">
            <span className="sidebar-icon">
              <HiSquare3Stack3D />
            </span>
            <span className="link-text">Compare</span>
            <svg>...</svg>
          </NavLink>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">
              <BsFillFileEarmarkTextFill />
            </span>
            <span className="link-text">Notes</span>
            <svg>...</svg>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <span className="sidebar-icon">
              <BsFillPersonFill />
            </span>
            <span className="link-text">Profile</span>
            <svg>...</svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};
