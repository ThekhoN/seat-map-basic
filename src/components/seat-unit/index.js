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
    disbleToolTop: false
  };
  onClick = seat => {
    if (this.props.shouldDisableSelection) {
      return;
    }

    const { selectedPassenger, seatBooking } = this.props;
    const otherPassengerSeatBookings = seatBooking.filter(
      seat => seat.id !== selectedPassenger.id
    );
    const allOtherSeats = otherPassengerSeatBookings.reduce((acc, item) => {
      return [...acc, ...item.seats];
    }, []);
    // if seat is already selected by other passenger then return
    if (allOtherSeats.indexOf(seat) > -1) {
      return;
    }

    const isSelected = this.checkIfSelected();
    if (!isSelected) {
      this.props.updateSeatSelection(seat, "ADD");
    } else {
      this.props.updateSeatSelection(seat, "REMOVE");
    }
  };
  renderSeatUnit() {
    if (this.props.cabinClass === "Business") {
      return <BusinessSeatUnitSVG />;
    } else {
      return <EconomySeatUnitSvg />;
    }
  }
  checkIfSelected() {
    const { seatBooking, seat } = this.props;
    const allSeatBookings = seatBooking.reduce((acc, item) => {
      return [...acc, ...item.seats];
    }, []);
    if (allSeatBookings.indexOf(seat) > -1) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const { top, left, seatDetails, columns, seat } = this.props;
    // 22 : 17

    let deriveWidth = this.props.cabinClass === "Business" ? "38px" : "30px";

    const seatNumber = seatDetails.Number[0];

    const derivedSeatStyle = deriveSeatStyle(seatNumber, columns);

    const style = {
      top: top ? top + "px" : 0 + "px",
      left: left ? left + "px" : 0 + "px",
      width: deriveWidth,
      height: "30px",
      ...derivedSeatStyle
    };
    const isSelected = this.checkIfSelected();
    let deriveClassName = isSelected ? "is-selected" : "";
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
