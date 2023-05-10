import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/compareCard.css";
import { FaTrashAlt } from "react-icons/fa";

export const CompareCard = () => {
  const { store, actions } = useContext(Context);
  return (
    <div class="compare_card">
      <div class="card_content">
        <div className="card_header">
          <h5 className="city_name">City</h5>
        </div>
        <p className="city_data">data</p>
        <div className="delete_function">
          {store.favorites.map((item, index) => (
            <button>
              <a className="delete_favorite">
                {item}
                <FaTrashAlt
                  style={{ cursor: "pointer" }}
                  onClick={() => actions.removeFromFavorites(index)}
                />
              </a>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
