import React from "react";

// seatUnit - large viewBox
const businessSeatUnitViewBox = "0 0 102.84 99.5";

export const SeatUnitSvg = ({
  title,
  childPath,
  width,
  height,
  handleOnClick,
  fillColor,
  strokeColor
}) => {
  return (
    <svg
      className="seat-icon"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox={businessSeatUnitViewBox}
      aria-labelledby="title"
      onClick={handleOnClick}
      fill={fillColor}
      stroke={strokeColor}
    >
      <title id="title">{title}</title>
      <path
        d="M83.31 1.5H18.69c-4.52 0-8.19 4-8.19 9v79c0 5 3.67 9 8.19 9h64.62c4.52 0 8.19-4 8.19-9v-79c0-4.96-3.67-9-8.19-9z"
        transform="translate(.42 -1)"
      />
      <path
        d="M92.15 16h-2a9.8 9.8 0 0 0-9.77 9.77v52.74H21.57V25.77A9.8 9.8 0 0 0 11.8 16h-2a9.8 9.8 0 0 0-9.72 9.77v64.46A9.8 9.8 0 0 0 9.85 100h80.3c5.37 0 11.77-4.4 11.77-9.77V25.77A9.8 9.8 0 0 0 92.15 16z"
        transform="translate(.42 -1)"
      />
    </svg>
  );
};

export default SeatUnitSvg;

SeatUnitSvg.defaultProps = {
  title: "",
  width: "22px",
  height: "22px",
  strokeColor: "#001d3f",
  fillColor: "#ffffff",
  handleOnClick: () => {}
};
