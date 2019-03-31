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

const RowContainer = ({ seat, columns, cabinClass, rowNumber }) => (
  <div className="row-container">
    {seat.map((seatDetails, index) => (
      <SeatUnit
        cabinClass={cabinClass}
        key={index}
        seatDetails={seatDetails}
        seatIndex={index}
        columns={columns}
        rowNumber={rowNumber}
      />
    ))}
  </div>
);

const CabinContainer = ({ seatMap }) => {
  const columns = seatMap.Cabin[0].Column;
  const cabinClass = seatMap.Cabin[0].CabinClass[0].CabinType[0];
  const rows = seatMap.Cabin[0].Row;
  return (
    <div className="cabin-container">
      <h4 className="cabin-class-title">{cabinClass}</h4>
      {rows.map((row, index) => (
        <RowContainer
          cabinClass={cabinClass}
          columns={columns}
          seat={row.Seat}
          rowNumber={row.RowNumber[0]}
          key={index}
        />
      ))}
    </div>
  );
};
const SeatMapComponent = () => {
  return <CabinContainer seatMap={res.seatMap} />;
};

export default SeatMapComponent;
