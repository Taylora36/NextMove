import React, { useState } from 'react';
import PropTypes from "prop-types";

const ExpandoCard = () => {
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
        Content!
      </div>
    </div>
  );
};

export default ExpandoCard; 
ExpandoCard.propTypes = {
    name: PropTypes.string,
    population: PropTypes.string,
    state: PropTypes.string,
    id: PropTypes.number,
    url: PropTypes.string,
  };