import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Sidebar } from "../components/Sidebar.jsx";
import { Card } from "../components/Card.jsx";
import ExpandoCard from "../components/ExpandoCard.jsx";
import "../../styles/explore.css";
import { BsFilter } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

export const Explore = () => {
  const { store, actions } = useContext(Context);

  const testState = () => {
    actions.getStateBatch();
    console.log(store.stateData);
  };

  return (
    <div className="locations_container">
      <div className="top_row">
        <div className="title_page">
          <h1>Explore</h1>
        </div>
        <div className="_filter">
          <button className="filter_button" role="button">
            Filter
            <span className="filter_symbol">
              <BsFilter />
            </span>
          </button>
        </div>
      </div>
      <form className="search_bar cf">
        <input className="search" placeholder="Search city..." type="text" />
        <button className="search_button" type="submit">
          Go
        </button>
      </form>
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

      {/* <button
        style={{ position: "absolute", left: "150px" }}
        onClick={testState}
      >
        Test
      </button> */}
    </div>
  );
};
