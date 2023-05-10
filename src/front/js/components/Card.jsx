import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/card.scss";
import { AiOutlineHeart } from "react-icons/ai";

export const Card = ({ state }) => {
  const { store, actions } = useContext(Context);
  const [isSmall, setIsSmall] = useState(true);
  const [isFavorited, setIsFavorited] = useState(true);

  useEffect(() => {
    setIsFavorited(store.favorites?.includes(state.stateName));
  }, [store.favorites]);

  const toggleFavorite = () => {
    if (store.favorites?.includes(state.stateName)) {
      actions.removeFromFavorites(state.stateName);
    } else {
      actions.addToFavorites(state.stateName);
    }
  };

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
                <span className={isFavorited ? "heart empty" : "heart filled"}>
                  <span onClick={toggleFavorite}>
                    <AiOutlineHeart />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
