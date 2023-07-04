import React from "react";
import "../Card/Card.css";

const Card = (props) => {
  return (
    <div>
      <div className="cardLine">
        <div class="card"></div>
        <div class="card-body">
          <a href="#">#{props.blockNo}</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
