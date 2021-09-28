import React from "react";
import "./Button.scss";
import deleteIcon from "../assets/download.png";

export const StarButton = props => {
  const { flag, onClick } = props;
  return (
    <div className="star">
      <button type="button" className={flag ? "on" : "off"} onClick={onClick}>
        <span className="star-icon">&#9733;</span>
      </button>
    </div>
  );
};
export const DeleteButton = props => {
  const { onClick } = props;
  return (
    <div className="delete">
      <button type="button" onClick={onClick}>
        <img src={deleteIcon} className="delete-icon" alt="delete" />
      </button>
    </div>
  );
};
