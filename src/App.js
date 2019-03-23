import React, { Component } from "react";
import "./App.css";
import SeatUnit from "./components/seat-unit";
import SeatUnitGroup from "./components/seat-unit-group";
import AirportSvg from "./components/airplane-svg";
import "./seat-styles.css";

const offsetTop = 6;

class App extends Component {
  render() {
    return (
      <div className="App seat-map__wrapper">
        <div className="airplane-svg__wrapper">
          <AirportSvg />
        </div>
        <div className="seat-map__container">
          <div>
            <div className="width--160 margin--0--auto">
              <div>
                <SeatUnitGroup>
                  <SeatUnit left={0} isBusiness />
                  <SeatUnit top={offsetTop} left={6} isBusiness />
                  <SeatUnit top={offsetTop} left={-12} isBusiness />
                  <SeatUnit left={0} isBusiness />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={8}>
                  <SeatUnit left={9} isBusiness />
                  <SeatUnit top={offsetTop} left={12} isBusiness />
                  <SeatUnit top={offsetTop} left={-6} isBusiness />
                  <SeatUnit left={-9} isBusiness />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={8}>
                  <SeatUnit left={0} isBusiness />
                  <SeatUnit top={offsetTop} left={6} isBusiness />
                  <SeatUnit top={offsetTop} left={-12} isBusiness />
                  <SeatUnit left={0} isBusiness />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={8}>
                  <SeatUnit left={9} isBusiness />
                  <SeatUnit top={offsetTop} left={12} isBusiness />
                  <SeatUnit top={offsetTop} left={-6} isBusiness />
                  <SeatUnit left={-9} isBusiness />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={8}>
                  <SeatUnit left={0} isBusiness />
                  <SeatUnit top={offsetTop} left={6} isBusiness />
                  <SeatUnit top={offsetTop} left={-12} isBusiness />
                  <SeatUnit left={0} isBusiness />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={8}>
                  <SeatUnit left={9} isBusiness />
                  <SeatUnit top={offsetTop} left={12} isBusiness />
                  <SeatUnit top={offsetTop} left={-6} isBusiness />
                  <SeatUnit left={-9} isBusiness />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={8}>
                  <SeatUnit left={0} isBusiness />
                  <SeatUnit top={offsetTop} left={6} isBusiness />
                  <SeatUnit top={offsetTop} left={-12} isBusiness />
                  <SeatUnit left={0} isBusiness />
                </SeatUnitGroup>
              </div>
              <div>
                <h4 className="cabin-label">MAIN CABIN EXTRA</h4>
              </div>
              <div>
                <SeatUnitGroup>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={8}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
              </div>
              <div>
                <SeatUnitGroup marginTop={35}>
                  <SeatUnit />
                  <SeatUnit left={-30} />
                  <SeatUnit left={30} />
                  <SeatUnit />
                </SeatUnitGroup>
              </div>
              <div>
                <h4 className="cabin-label">MAIN CABIN </h4>
              </div>
              <div>
                <SeatUnitGroup>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={10}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                  <SeatUnit left={-6} />
                  <SeatUnit left={6} />
                  <SeatUnit />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit left={54} />
                  <SeatUnit />
                  <SeatUnit left={-54} />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit left={54} />
                  <SeatUnit />
                  <SeatUnit left={-54} />
                </SeatUnitGroup>
                <SeatUnitGroup marginTop={4}>
                  <SeatUnit left={54} />
                  <SeatUnit />
                  <SeatUnit left={-54} />
                </SeatUnitGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
