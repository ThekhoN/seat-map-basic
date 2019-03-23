import React from "react";
import "./style.css";

export const props = {
  seat: "16 A",
  seatClass: "Business",
  type: "Angle Lie Flat & Bulkhead",
  summary: "Standard Business Class Seat",
  features: {
    "On-Demand TV": true,
    "AC Power": true
  }
};

const ToolTipContent = ({ seat, seatClass, type, summary, features }) => (
  <div className="tool-tip-content">
    <div className="seat">{seat}</div>
    <div className="seatClass">{seatClass}</div>
    <div className="summary">{summary}</div>
  </div>
);

export default ToolTipContent;
