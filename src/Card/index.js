import React from "react";
import "./styles.css";

const Card = ({img}) => {
  return (
    <div className="card-content">
      <img src={img} alt="" />
    </div>
  );
};

export default Card;
