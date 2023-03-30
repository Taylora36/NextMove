import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { AiOutlineStar } from "react-icons/ai";
import "../../styles/card.scss";

export const Card = (props) => {
  const { actions } = useContext(Context);
  return (
    <div class="cards">
  <div class="card">
    <h2><a href="#">Title</a></h2>
    <p>Some article description stuff.</p>
  </div>
  <div class="card">
    <h2><a href="#">Title</a></h2>
    <p>Some article description stuff.</p>
  </div>
  <div class="card">
    <h2><a href="#">Title</a></h2>
    <p>Some article description stuff.</p>
  </div>
  <div class="card">
    <h2><a href="#">Title</a></h2>
    <p>Some article description stuff.</p>
  </div>
  <div class="card">
    <h2><a href="#">Title</a></h2>
    <p>Some article description stuff.</p>
  </div>
</div>
    // <div className="_container">
    //   <div className="city_image">
    //     <img src="" className="card-img-top" alt="..." />
    //     <div className="data_box">
    //       <div className="first_line">
    //         <h4 className="city_name">{props.name}</h4>
    //         <div className="favorites_button">
    //           <button
    //             className="_favorites"
    //             onClick={() => actions.addToFavorites(props.name)}
    //           >
    //             <AiOutlineStar />
    //           </button>
    //         </div>
    //       </div>
    //       <div className="info_box">
    //         <ul className="list_group">
    //           <li>
    //             Population:{" "}
    //             <span className="text-capitalize">{props.population}</span>
    //           </li>
    //           <li>
    //             State: <span className="text-capitalize">{props.state}</span>
    //           </li>
    //         </ul>
    //       </div>
    //       <div className="d-flex justify-content-between p-3">
    //         <div className="">
    //           {/* <Link to={`/people/${props.id}`}> */}
    //           <div className="btn btn-outline-warning">Details</div>
    //           {/* </Link> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
Card.propTypes = {
  name: PropTypes.string,
  population: PropTypes.string,
  state: PropTypes.string,
  id: PropTypes.number,
  url: PropTypes.string,
};
