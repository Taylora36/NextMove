import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal } from "./ExpandoCard.jsx";
import { AiOutlineStar } from "react-icons/ai";
import "../../styles/card.scss";

export const Card = (props) => {
  const { actions } = useContext(Context);
  const [isSmall, setIsSmall] = useState(true);

  return (
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
            <a href="#">{props.state.selectedProfile.label}</a>
          </h2>
          <p>Some article description stuff.</p>
        </div>
      </div>
    </div>
  );
};
