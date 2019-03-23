import React from "react";

const SeatUnitGroup = ({ top, left, children, marginTop }) => {
  const style = {
    top: top ? top + "px" : 0 + "px",
    left: left ? left + "px" : 0 + "px",
    marginTop: marginTop ? marginTop + "px" : 0 + "px",
    display: "flex",
    justifyContent: "space-between",
    position: "relative"
  };
  return (
    <div className="seat-unit-group" style={style}>
      {children}
    </div>
  );
};

export default SeatUnitGroup;
