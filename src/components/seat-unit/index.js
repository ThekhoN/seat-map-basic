import React from "react";
import BusinessSeatUnitSVG from "../seat-unit-svg";
import EconomySeatUnitSvg from "../seat-unit-small-svg";
import "./style.css";
import ReactTooltip from "react-tooltip";
// import HoverIntent from "react-hoverintent";
import ToolTipContent, { props as seatUnitProps } from "../tool-tip-content";
import uniqid from "uniqid";

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
  componentDidMount() {
    this.setState({
      id: uniqid()
    });
  }
  renderToolTipContent = () => {
    if (this.state.disbleToolTop) {
      return null;
    }
    return (
      <ReactTooltip
        className="seat-unit__tool-tip"
        id={`example-${this.state.id}`}
        place="bottom"
        type="light"
        effect="solid"
      >
        <ToolTipContent {...seatUnitProps} />
      </ReactTooltip>
    );
  };
  renderSeatUnit() {
    if (this.props.isBusiness) {
      return <BusinessSeatUnitSVG />;
    } else {
      return <EconomySeatUnitSvg />;
    }
  }
  render() {
    const { top, left } = this.props;
    let deriveWidth = this.props.isBusiness ? "22px" : "17px";

    const style = {
      top: top ? top + "px" : 0 + "px",
      left: left ? left + "px" : 0 + "px",
      width: deriveWidth,
      height: "22px"
    };
    let deriveClassName = this.state.isSelected ? "is-selected" : "";
    return (
      <React.Fragment>
        <div
          className={`seat-unit ${deriveClassName}`}
          style={style}
          onClick={this.onClick}
          data-for={`example-${this.state.id}`}
          data-tip
        >
          {this.renderSeatUnit()}
        </div>
        {this.renderToolTipContent()}
      </React.Fragment>
    );
  }
}

export default SeatUnit;
