import React from "react";
import "./style.css";
import SeatUnit from "../seat-unit";
import get from "lodash.get";
import { response } from "../../Fixtures/response";

const getTrimmedResponse = res => {
  return {
    seatMap: get(
      res,
      "soap-env:Envelope.soap-env:Body[0].EnhancedSeatMapRS[0].SeatMap[0]"
    ),
    applicationResults: get(
      res,
      "soap-env:Envelope.soap-env:Body[0].EnhancedSeatMapRS[0].ns3:ApplicationResults[0]"
    )
  };
};

const res = getTrimmedResponse(response);

const RowContainer = ({
  seat,
  columns,
  cabinClass,
  rowNumber,
  selectedPassenger,
  updateSeatSelection
}) => (
  <div className="row-container">
    {seat.map((seatDetails, index) => (
      <SeatUnit
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
  updateSeatSelection
}) => {
  const columns = seatMap.Cabin[0].Column;
  const cabinClass = seatMap.Cabin[0].CabinClass[0].CabinType[0];
  const rows = seatMap.Cabin[0].Row;
  return (
    <div className="cabin-container">
      <h4 className="cabin-class-title">{cabinClass}</h4>
      {rows.map((row, index) => (
        <RowContainer
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
const SeatMapComponent = ({ selectedPassenger, updateSeatSelection }) => {
  return (
    <div>
      <div className="seat-map-height-container">
        <div className="seat-map-horizontal-container">
          <CabinContainer
            seatMap={res.seatMap}
            selectedPassenger={selectedPassenger}
            updateSeatSelection={updateSeatSelection}
          />
        </div>
      </div>
    </div>
  );
};

export default SeatMapComponent;
