import React from "react";
import "./Card.css";
import Text from "../../components/Text/Text";
import Check from "../../assets/images/check.svg";

const Card = ({ url, text, isSelected, onClick }) => {
  return (
    <div onClick={onClick} className="card">
      <img src={url} alt={text} />
      <Text>{text}</Text>
      {isSelected && <img src={Check} alt="chosen" className="check" />}
    </div>
  );
};

export default Card;
