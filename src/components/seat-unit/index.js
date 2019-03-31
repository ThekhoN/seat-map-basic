import React from "react";
import BusinessSeatUnitSVG from "../seat-unit-svg";
import EconomySeatUnitSvg from "../seat-unit-small-svg";
import "./style.css";
import Tooltip from "react-tooltip-lite";
import ToolTipContent from "../tool-tip-content";
import {
  getSeatOccupationClassName,
  deriveSeatStyle,
  getOccupation,
  getLocation,
  getFacilites,
  getCurrencyCode,
  getTotalAmount
} from "./utils";

class SeatUnit extends React.Component {
  state = {
    disbleToolTop: false,
    disableSelection: false,
    isSelected: false,
    id: ""
  };
  onClick = () => {
    if (!this.state.disableSelection) {
      this.setState({
        isSelected: !this.state.isSelected
      });
    }
  };
  renderSeatUnit() {
    if (this.props.cabinClass === "Business") {
      return <BusinessSeatUnitSVG />;
    } else {
      return <EconomySeatUnitSvg />;
    }
  }
  render() {
    const { top, left, seatDetails, columns } = this.props;
    let deriveWidth = this.props.cabinClass === "Business" ? "22px" : "17px";

    const seatNumber = seatDetails.Number[0];

    const derivedSeatStyle = deriveSeatStyle(seatNumber, columns);

    const style = {
      top: top ? top + "px" : 0 + "px",
      left: left ? left + "px" : 0 + "px",
      width: deriveWidth,
      height: "22px",
      ...derivedSeatStyle
    };
    let deriveClassName = this.state.isSelected ? "is-selected" : "";
    /********************************************/
    // seat unit details
    /********************************************/
    const occupation = getOccupation(seatDetails);
    const seatOccupationClasName = getSeatOccupationClassName(occupation);
    const location = getLocation(seatDetails);
    const facilities = getFacilites(seatDetails);
    const totalAmount = getTotalAmount(seatDetails);
    const currencyCode = getCurrencyCode(seatDetails);
    const seatDetailsForToolTip = {
      seat: `${this.props.rowNumber} ${seatNumber}`,
      seatClass: this.props.cabinClass,
      occupation,
      location,
      facilities,
      totalAmount,
      currencyCode
    };

    return (
      <React.Fragment>
        <Tooltip content={<ToolTipContent {...seatDetailsForToolTip} />}>
          <div
            className={`seat-unit ${deriveClassName} ${seatOccupationClasName}`}
            style={style}
            onClick={() => {
              if (occupation === "SeatIsFree") {
                this.onClick();
              }
            }}
          >
            {this.renderSeatUnit()}
          </div>
        </Tooltip>
      </React.Fragment>
    );
  }
}

export default SeatUnit;
