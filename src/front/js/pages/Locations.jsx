import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../components/Card.jsx";
import { Sidebar } from "../components/Sidebar.jsx";
import "../../styles/locations.css";

export const Locations = () => {
    return(
  <div className="_container">
    <Sidebar />
    <div className="top_row">
      <div className="title_page">
        <h1>Explore</h1>
      </div>
      <div className="_filter">
        <button className="filter_button">Filter</button>
      </div>
    </div>
    <div className="search_bar">
      <input className="search" placeholder="Search city..." type="text" />
      <button className="search_button">Search</button>
    </div>
    <div className="card_carousel">
      <Card />
      <Card />
      <Card />
      <Card />
      <div className="arrow">
        <span>Arrow</span>
      </div>
    </div>
  </div>
    )
};
