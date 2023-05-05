import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

import "../../styles/compare.css";
import { CompareCard } from "../components/CompareCard.jsx";

export const Compare = () => {

  return (
    <div className="compare_container">
      <div className="compare_cities">
        <h3 className="cities_header">Your cities</h3>
      </div>
      <div className="compare_cards">
        <CompareCard />
      </div>
    </div>
  );
};
