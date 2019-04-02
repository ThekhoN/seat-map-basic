import React from "react";
import "./style.css";
import SeatUnit from "../seat-unit";

const RowContainer = ({
  seat,
  columns,
  cabinClass,
  rowNumber,
  selectedPassenger,
  updateSeatSelection,
  seatBooking
}) => (
  <div className="row-container">
    {seat.map((seatDetails, index) => (
      <SeatUnit
        seat={`${rowNumber} ${seatDetails.Number[0]}`}
        seatBooking={seatBooking}
        updateSeatSelection={updateSeatSelection}
        cabinClass={cabinClass}
        key={index}
        seatDetails={seatDetails}
        seatIndex={index}
        columns={columns}
        rowNumber={rowNumber}
        selectedPassenger={selectedPassenger}
      />
    ))}
  </div>
);

const CabinContainer = ({
  seatMap,
  selectedPassenger,
  updateSeatSelection,
  seatBooking
}) => {
  const columns = seatMap.Cabin[0].Column;
  const cabinClass = seatMap.Cabin[0].CabinClass[0].CabinType[0];
  const rows = seatMap.Cabin[0].Row;
  return (
    <div className="cabin-container">
      <h4 className="cabin-class-title">{cabinClass}</h4>
      {rows.map((row, index) => (
        <RowContainer
          seatBooking={seatBooking}
          updateSeatSelection={updateSeatSelection}
          cabinClass={cabinClass}
          columns={columns}
          seat={row.Seat}
          rowNumber={row.RowNumber[0]}
          key={index}
          selectedPassenger={selectedPassenger}
        />
      ))}
    </div>
  );
};
const SeatMapComponent = ({
  selectedPassenger,
  updateSeatSelection,
  seatBooking,
  seatMap
}) => {
  return (
    <div>
      <div className="seat-map-height-container">
        <div className="seat-map-horizontal-container">
          <CabinContainer
            seatBooking={seatBooking}
            seatMap={seatMap}
            selectedPassenger={selectedPassenger}
            updateSeatSelection={updateSeatSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatMapComponent;
