import React, { useState } from "react";
import "../../styles/card.scss";
import { AiOutlineHeart } from "react-icons/ai";

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
              <h3>{state.stateName}</h3>
              <p>Population: {state.population.value}</p>
              <p>Median Income: {state.medIncome.value}</p>
              <div className="add_favorites">
                <span
                  className="favorites_button"
                  onClick={() => actions.addToFavorites(props.name)}
                >
                  <AiOutlineHeart />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
