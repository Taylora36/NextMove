import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Sidebar } from "../components/Sidebar.jsx";
import { Card } from "../components/PlaceholderCard.jsx";
import "../../styles/locations.css";
import { BsFilter } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

export const Locations = () => {
    return(
  <div className="whole_container">
    <Sidebar />
    <div className="_container">
    <div className="top_row">
      <div className="title_page">
        <h1>Explore</h1>
      </div>
      <div className="_filter">
        <button className="filter_button" role="button">Filter<span className="filter_symbol"><BsFilter/></span></button>
      </div>
    </div>
    <form className="search_bar cf">
      <input className="search" placeholder="Search city..." type="text" />
      <button className="search_button" type="submit">Go</button>
    </form>
    <div className="card_lineup">
      <Card/>
      <Card/>
      <Card/>
      <button className="arrow_button"><IoIosArrowForward/></button>
    </div>
  </div>
  </div>
    )
};
