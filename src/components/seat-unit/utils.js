const NO_INFO_AVAILABLE = "No Info Available";

export function getOccupation(seatDetails) {
  if (
    seatDetails.Occupation &&
    seatDetails.Occupation[0] &&
    seatDetails.Occupation[0].Detail &&
    seatDetails.Occupation[0].Detail[0]
  ) {
    return seatDetails.Occupation[0].Detail[0];
  } else {
    return NO_INFO_AVAILABLE;
  }
}

export function getLocation(seatDetails) {
  if (
    seatDetails.Location &&
    seatDetails.Location[0] &&
    seatDetails.Location[0].Detail
  ) {
    return seatDetails.Location[0].Detail;
  } else {
    return NO_INFO_AVAILABLE;
  }
}

export function getFacilites(seatDetails) {
  if (
    seatDetails.Facilities &&
    seatDetails.Facilities[0] &&
    seatDetails.Facilities[0].Detail
  ) {
    return seatDetails.Facilities[0].Detail;
  } else {
    return [];
  }
}

export function getCurrencyCode(seatDetails) {
  if (
    seatDetails.Price &&
    seatDetails.Price[0] &&
    seatDetails.Price[0].TotalAmount &&
    seatDetails.Price[0].TotalAmount[0] &&
    seatDetails.Price[0].TotalAmount[0]["$"] &&
    seatDetails.Price[0].TotalAmount[0]["$"].currencyCode
  ) {
    return seatDetails.Price[0].TotalAmount[0]["$"].currencyCode;
  } else {
    return "";
  }
}

export function getTotalAmount(seatDetails) {
  if (
    seatDetails.Price &&
    seatDetails.Price[0] &&
    seatDetails.Price[0].TotalAmount &&
    seatDetails.Price[0].TotalAmount[0] &&
    seatDetails.Price[0].TotalAmount[0]["_"]
  ) {
    return seatDetails.Price[0].TotalAmount[0]["_"];
  } else {
    return "";
  }
}

export function getSeatOccupationClassName(seatOccupation) {
  if (!seatOccupation) {
    return "";
  }
  switch (seatOccupation) {
    case "SeatIsFree":
      return "seat-is-free";
    case "SeatIsOccupied":
      return "seat-is-occupied";
    default:
      return "seat-is-unavailable";
  }
}

export function deriveSeatStyle(seatNumber, columns) {
  let style = {};
  let matchingColumnIndex = -1;
  const matchinColumn = columns.filter((column, index) => {
    if (column.Column[0] === seatNumber) {
      matchingColumnIndex = index;
    }
    return column.Column[0] === seatNumber;
  })[0];

  if (
    matchinColumn.Characteristics[0] === "Aisle" &&
    columns[matchingColumnIndex + 1].Characteristics[0] !== "Aisle"
  ) {
    style = {
      marginRight: "10px"
    };
  }
  return style;
}
