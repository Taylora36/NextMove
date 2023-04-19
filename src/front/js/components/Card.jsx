import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Modal } from "./ExpandoCard.jsx";
import { AiOutlineStar } from "react-icons/ai";
import "../../styles/card.scss";

export const Card = (props) => {
  const { actions } = useContext(Context);
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
          <h3>State</h3>
          <p>Population</p>
          <p>Avg Income</p>
          </div>
        </div>
        </div>
      </div>
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
          <h3>State</h3>
          <p>Population</p>
          <p>Avg Income</p>
          </div>
        </div>
      </div>
      </div>
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
          <a href="#">{props.state.selectedProfile.label}</a>
          <h3>State</h3>
          <p>Population</p>
          <p>Avg Income</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

