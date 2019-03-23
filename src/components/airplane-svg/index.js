import React from "react";
import "./style.css";

const airplaneViewBox = "0 0 400 1432.32";

const AirplaneSvg = ({ title, viewBox }) => (
  <svg
    title={title}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox}
    height="100%"
    width="100%"
    className="airplane-svg"
  >
    <path d="M284 804.5L399.5 841V536L284 494.5v310z" />
    <path
      d="M274.55 1308.5c-10-12-15-21-16-27s10.81-50.22 10.81-50.22c6.21-24.64 14.13-51.28 14.13-51.28V494.5s2-295 0-310S269 129 249.55 85.18 203.5 1.5 199.5 1.5s-30.61 39.86-50.05 83.68-31.95 84.32-33.95 99.32 0 310 0 310V1180s7.92 26.64 14.13 51.28c0 0 11.81 44.22 10.81 50.22s-6 15-16 27-19 16-19 16l.05 108s64-33 76-31c0 0 13 23 18 23s18-23 18-23c12-2 76 31 76 31l.05-108s-8.99-4-18.99-16z"
      transform="translate(.5 -1)"
    />
    <path d="M116 804.5L.5 841V536L116 494.5v310z" />
  </svg>
);

AirplaneSvg.defaultProps = {
  viewBox: airplaneViewBox,
  title: "Airplane"
};

export default AirplaneSvg;
