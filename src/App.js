import React from "react";
import "./App.css";
import "./seat-styles.css";
import SeatMapComponent from "./components/seat-map-component";

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
  render() {
    return (
      <div className="seat-map-app">
        <SeatMapComponent
          selectedPassenger={this.state.selectedPassenger}
          updateSeatSelection={this.updateSeatSelection}
        />
        <div className="seat-map-select__widget-wrapper">
          <div className="seat-map-select__widget">
            <label>
              <span>Select Passenger:</span>
              <br />
              <select onChange={this.selectPassenger}>
                {passengers.map(passenger => (
                  <option key={passenger.id} value={passenger.id}>
                    {passenger.name}
                  </option>
                ))}
              </select>
            </label>
            <span>{this.renderSelectedPassengersSeats()}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
