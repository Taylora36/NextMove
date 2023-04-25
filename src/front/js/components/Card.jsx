import React, { useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Modal } from "./ExpandoCard.jsx";
import { AiOutlineStar } from "react-icons/ai";
import "../../styles/card.scss";

export const Card = ({ state }) => {
  const [isSmall, setIsSmall] = useState(true);

  return (
    <div className="cards">
      <div className="single_card">
        <div
          onClick={() => setIsSmall(!isSmall)}
          className={isSmall ? "modalOff" : "modalOn"}
        >
          <div
            onClick={() => setIsSmall(!isSmall)}
            className={isSmall ? "card small" : "card large"}
          >
            <div className="card_text">
              <h3>{state?.stateName}</h3>
              <p>Population: {state?.population}</p>
              <p>Median Income: {state?.medIncome}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
