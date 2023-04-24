import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Sidebar } from "../components/Sidebar.jsx";
import { Card } from "../components/Card.jsx";
import "../../styles/explore.css";
import { GoTriangleDown } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const Explore = () => {
  const { store, actions } = useContext(Context);

  const testState = () => {
    actions.getStateBatch();
    console.log(store.stateData);
  };

  return (
    <div className="locations_container">
      <div className="_filter">
        <div className="drop_down">
          <button className="filter_button" role="button">
            Filter
            <GoTriangleDown />
          </button>
          <div className="dropdown_content">
            <ul class="checkbox-dropdown-list">
              <li>
                <label>
                  <input type="checkbox" value="Vejle" name="city" />
                  Milwaukee
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="Horsens" name="city" />
                  Denver
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="Kolding" name="city" />
                  Boston
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" value="Kolding" name="city" />
                  LA
                </label>
              </li>
            </ul>
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
        <div className="cards">
          {store.stateData.map((state, index) => {
            return <Card key={index} state={state} />;
          })}
        </div>
        <button className="arrow_button">
          <IoIosArrowForward onClick={testState} />
        </button>
      </div>
    </div>
  );
};
