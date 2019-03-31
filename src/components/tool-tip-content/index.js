import React from "react";
import "./style.css";

const ToolTipContent = ({
  seat,
  seatClass,
  occupation,
  facilities,
  location,
  totalAmount,
  currencyCode
}) => (
  <div className="tool-tip-content">
    <div className="seat">{seat}</div>
    <div className="seatClass">{seatClass}</div>
    <div>Occupation: {occupation}</div>
    <div>Location: {location}</div>
    <div>Facilities: {facilities.join("")}</div>
    <div>Price: {totalAmount + " " + currencyCode}</div>
  </div>
);

ToolTipContent.defaultProps = {
  seat: "",
  seatClass: "",
  occupation: "",
  location: "",
  facilities: [],
  totalAmount: "",
  currencyCode: ""
};

export default ToolTipContent;
