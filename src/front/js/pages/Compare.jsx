import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/compare.css";
import { Card } from "../components/Card.jsx";

export const Compare = () => {
  function Favorites({ states, onFavoritedStates }) {
    const favoriteStates = states.filter((state) => (
      <Card
        key={state.id}
        state={state}
        onFavoritedStates={onFavoritedStates}
      />
    ));
  }

  return (
    <div className="compare_container">
      <div className="compare_cities">
        <h3 className="cities_header">Your cities</h3>
      </div>
      <div className="compare_cards">
        <Card />
      </div>
    </div>
  );
};
