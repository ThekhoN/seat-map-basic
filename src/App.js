import React from "react";
import "./App.css";
// import "./seat-styles.css";
import SeatMapComponent from "./components/seat-map-component";
import get from "lodash.get";
import { response } from "./Fixtures/response";

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

const passengers = [
  {
    id: 1,
    name: "Jerome Boateng"
  },
  {
    id: 2,
    name: "Robert Lewandowski"
  }
];

const getInitialBooking = passengers => {
  return passengers.reduce((acc, item) => {
    let bookingObj = {
      id: item.id,
      seats: []
    };
    return [...acc, bookingObj];
  }, []);
};

class App extends React.Component {
  state = {
    seatLimit: 1,
    selectedPassenger: passengers[0],
    seatBooking: getInitialBooking(passengers)
  };

  updateSeatSelection = (selectedSeat, type) => {
    const { selectedPassenger, seatBooking } = this.state;
    const selectedPassengerSeatObj = seatBooking.filter(
      seat => seat.id === selectedPassenger.id
    )[0];
    const selectedPassengerSeats = selectedPassengerSeatObj.seats;
    let updatedSelectedPassengerSeats = selectedPassengerSeats;
    if (type === "ADD") {
      updatedSelectedPassengerSeats = [...selectedPassengerSeats, selectedSeat];
    } else {
      updatedSelectedPassengerSeats = selectedPassengerSeats.filter(
        seat => seat !== selectedSeat
      );
    }

    if (updatedSelectedPassengerSeats.length > this.state.seatLimit) {
      // alert(`Limit of ${this.state.seatLimit} seat per passenger exceeded!`);
      return;
    } else {
      const updatedSeatBooking = [
        ...this.state.seatBooking.filter(
          booking => booking.id !== selectedPassenger.id
        ),
        {
          ...selectedPassengerSeatObj,
          seats: updatedSelectedPassengerSeats
        }
      ];
      this.setState({
        seatBooking: updatedSeatBooking
      });
    }
  };
  selectPassenger = e => {
    const selectedPassenger = passengers.filter(
      passenger => passenger.id === parseInt(e.target.value)
    )[0];
    this.setState({
      selectedPassenger
    });
  };
  renderSelectedPassengersSeats() {
    const { selectedPassenger, seatBooking } = this.state;
    const selectedPassengerSeatBooking = seatBooking.find(
      booking => booking.id === selectedPassenger.id
    );
    return selectedPassengerSeatBooking.seats.join(", ");
  }
  renderPassengerSeats(passengerId) {
    const { seatBooking } = this.state;
    const passengerBooking = seatBooking.find(
      booking => booking.id === passengerId
    );
    return passengerBooking.seats.join(", ");
  }
  getIsDefaultChecked(index) {
    if (index === 0) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const getIsSelectedClass = passengerId => {
      if (this.state.selectedPassenger.id === passengerId) {
        return "--is-selected";
      } else {
        return "";
      }
    };

    return (
      <div className="seat-map-app">
        <SeatMapComponent
          seatMap={res.seatMap}
          seatBooking={this.state.seatBooking}
          selectedPassenger={this.state.selectedPassenger}
          updateSeatSelection={this.updateSeatSelection}
        />
        <div className="seat-map-select__widget-wrapper">
          <div className="seat-map-select__widget">
            <div className="seat-map-select__row">
              <h5>Passengers:</h5>
              <h5>Seats:</h5>
            </div>
            <br />
            {passengers.map((passenger, i) => (
              <label
                key={passenger.id}
                className={`seat-map-select-unit seat-map-select__row ${getIsSelectedClass(
                  passenger.id
                )}`}
              >
                <span className="passenger-radio-and-name-group">
                  <input
                    name="passenger"
                    type="radio"
                    value={passenger.id}
                    defaultChecked={this.getIsDefaultChecked(i)}
                    onChange={this.selectPassenger}
                  />
                  <span className="passenger-name">{passenger.name}</span>
                </span>
                <input
                  className="selected-seat__input"
                  value={this.renderPassengerSeats(passenger.id)}
                  readOnly
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
