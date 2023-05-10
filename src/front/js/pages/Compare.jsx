import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/compare.css";
import { Card } from "../components/Card.jsx";

export const Compare = () => {
  const { store, actions } = useContext(Context);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    actions.rehydrate();
    actions.getFavorites();
    setCards(
      store.stateData.filter((state) =>
        store.favorites?.includes(state.stateName)
      )
    );
  }, []);
  //iterate over store.favorites and use it to run a specific getstae data for each one

  return (
    <div className="compare_container">
      <div className="compare_cities">
        <div className="header_page">
          <span className="blob__top"></span>
          <h3 className="cities_header">Your cities</h3>
        </div>
      </div>
      <div className="compare_cards">
        <div className="cards">
          {cards.map((state) => (
            <Card key={state.id} state={state} />
          ))}
        </div>
      </div>
    </div>
  );
};
