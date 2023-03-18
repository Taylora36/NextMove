import React from "react";
import "../../styles/sidebar.css";
import { AiFillCar } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { HiSquare3Stack3D } from 'react-icons/hi2';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar-nav">
        <li className="logo">
          <a href="#" className="sidebar-link">
            <span className="link-text-logo-text"><AiFillCar /></span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
          <span className="sidebar-icon"><AiFillCar /></span>
            <span className="link-text">Home</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <span className="sidebar-icon"><BiSearch /></span>
            <span className="link-text">Search</span>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <span className="sidebar-icon"><HiSquare3Stack3D /></span>
            <span className="link-text">Compare</span>
            <svg>...</svg>
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <span className="sidebar-icon"><BsFillFileEarmarkTextFill /></span>
            <span className="link-text">Notes</span>
            <svg>...</svg>
          </a>
          </li>
          <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <span className="sidebar-icon"><BsFillPersonFill /></span>
            <span className="link-text">Profile</span>
            <svg>...</svg>
          </a>
        </li>
      </ul>
    </nav>
  )
};
