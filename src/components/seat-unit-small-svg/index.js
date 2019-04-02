import React from "react";

// seatUnit - small viewBox
const smallSeatUnitViewBox = "0 0 83 100.16";

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
      viewBox={smallSeatUnitViewBox}
      aria-labelledby="title"
      onClick={handleOnClick}
      fill={fillColor}
      stroke={strokeColor}
    >
      <title id="title">{title}</title>
      <path
        d="M67.67 1.42h-52C12 1.42 9 5.48 9 10.48V90c0 5 3 9.06 6.59 9.06h52c3.64 0 6.59-4.06 6.59-9.06V10.48c.08-5-2.87-9.06-6.51-9.06z"
        transform="translate(-.15 -.92)"
      />
      <path
        d="M74.79 16h-1.57c-4.33 0-7.86 4.42-7.86 9.83V84H18V25.85c0-5.41-3.58-9.85-7.91-9.85H8.52C4.19 16 .65 20.44.65 25.85v64.9c0 5.41 3.54 9.83 7.86 9.83h64.67c4.33 0 9.48-4.42 9.48-9.83v-64.9c-.01-5.41-3.55-9.85-7.87-9.85z"
        transform="translate(-.15 -.92)"
      />
    </svg>
  );
};

export default SeatUnitSvg;

SeatUnitSvg.defaultProps = {
  title: "",
  width: "17px",
  height: "21px",
  strokeColor: "#001d3f",
  fillColor: "#ffffff",
  handleOnClick: () => {}
};
