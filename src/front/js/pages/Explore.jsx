import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Sidebar } from "../components/Sidebar.jsx";
import { Card } from "../components/Card.jsx";
import ExpandoCard from "../components/ExpandoCard.jsx";
import "../../styles/explore.scss";
import { GoTriangleDown } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const Explore = () => {
  return (
    <div className="locations_container">
      <div className="_filter">
      <div class="drop_down">
          <button className="filter_button" role="button">
            Filter
              <GoTriangleDown />
          </button>
          <div class="dropdown_content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
          </div>
        </div>
      <div className="top_row">
        <div className="title_page">
          <h3 className="title_header">Choose your city...</h3>
        </div>
        
      </div>
      <div className="search_bar">
        <input className="search" placeholder="Search city..." type="text" />
        <button className="search_button" type="submit">
          Go
        </button>
      </div>
      <div className="card_lineup">
        <Card />
        <button className="arrow_button">
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};
