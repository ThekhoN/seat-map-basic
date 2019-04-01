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
  onClick = seat => {
    if (!this.state.disableSelection) {
      this.setState(
        {
          isSelected: !this.state.isSelected
        },
        () => {
          if (this.state.isSelected) {
            this.props.updateSeatSelection(seat, "ADD");
            const message = `seat ${seat} was selected for passenger id: ${
              this.props.selectedPassenger.id
            } and name: ${this.props.selectedPassenger.name}`;
            console.log(message);
          } else {
            this.props.updateSeatSelection(seat, "REMOVE");
          }
        }
      );
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
    const seat = `${this.props.rowNumber} ${seatNumber}`;
    const seatDetailsForToolTip = {
      seat,
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
                this.onClick(seat);
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
