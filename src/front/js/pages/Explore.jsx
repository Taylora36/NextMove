import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Sidebar } from "../components/Sidebar.jsx";
import { Card } from "../components/Card.jsx";
import ExpandoCard from "../components/ExpandoCard.jsx";
import "../../styles/explore.css";
import { GoTriangleDown } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const Explore = () => {
  const { store, actions } = useContext(Context);

  const testState = () => {
    actions.getStateBatch();
    console.log(store.stateData);
  };

  const [query, setQuery] = useState("");
  const [searchOutput, setSearchOutput] = useState([]);

  useEffect(() => {
    setSearchOutput();
  }, [query]);

  return (
    <div className="locations_container">
      <div className="_filter">
        <div className="drop_down">
          <button className="filter_button" role="button">
            Filter
            <GoTriangleDown />
          </button>
          <div className="dropdown_content">
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
        <label htmlFor="search-input">
          <input
            id="search-input"
            className="search"
            name="search-input"
            type="search"
            placeholder="Search for a State (e.g. Michigan, MI)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search_button" type="submit">
            Go
          </button>
        </label>
      </div>
      <div className="card_lineup">
        <div className="cards">
          {store.stateData.map((item, index) => {
            return (
              <Card
                key={index}
                population={item?.population}
                medIncome={item?.medIncome}
              />
            );
          })}
        </div>
        <button className="arrow_button">
          <IoIosArrowForward onClick={testState} />
        </button>
      </div>
    </div>
  );
};
