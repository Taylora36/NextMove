import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Card } from "../components/Card.jsx";
import "../../styles/explore.css";
import { GoTriangleDown } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";

export const Explore = () => {
  const { store, actions } = useContext(Context);

  const loadStateBatch = () => {
    actions.getStateBatch();
  };

  const [query, setQuery] = useState("");

  useEffect(() => {
    actions.rehydrate();
    actions.getStateBatch(51);
  }, []);

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
          <h3 className="title_header">Choose your State</h3>
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
        </label>
      </div>
      <div className="card_lineup">
        <div className="cards">
          {store.stateData
            .filter((elem) => {
              return [elem.stateName.toLowerCase()].some((e) =>
                e.includes(query.toLowerCase())
              );
            })
            .map((state, index) => {
              return <Card key={index} state={state} />;
            })}
        </div>
        <button className="arrow_button">
          <IoIosArrowForward onClick={loadStateBatch} />
        </button>
      </div>
    </div>
  );
};
