import React from "react";
import "./FinanceCard.scss";

const FinanceCard = ({ pic, title, body, btnText }) => {
  return (
    <div className="FinanceCard">
      <div className="card_body">
        <img src={pic} alt="icon" />
        <p className="title">{title}</p>
        <p className="body">{body}</p>
        <a href="#">{btnText}</a>
      </div>
    </div>
  );
};

export default FinanceCard;
