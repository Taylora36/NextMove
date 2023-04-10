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
      <div
        onClick={() => setIsSmall(!isSmall)}
        className={isSmall ? "modalOff" : "modalOn"}
      >
        <div
          onClick={() => setIsSmall(!isSmall)}
          className={isSmall ? "card small" : "card large"}
        >
          <div className="card">
            <h2>
              <a href="#">Title</a>
            </h2>
            <p>Some article description stuff.</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>
          <a href="#">Title</a>
        </h2>
        <p>Some article description stuff.</p>
      </div>
      <div className="card">
        <h2>
          <a href="#">Title</a>
        </h2>
        <p>Some article description stuff.</p>
      </div>
      <div className="card">
        <h2>
          <a href="#">Title</a>
        </h2>
        <p>Some article description stuff.</p>
      </div>
      <div className="card">
        <h2>
          <a href="#">Title</a>
        </h2>
        <p>Some article description stuff.</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};
