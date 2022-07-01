import React, { Component } from "react";

export default class Car extends Component {
  state = {
    imgCar: "./images/black-car.jpg",
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              src={this.state.imgCar}
              style={{ width: "100%" }}
              alt={this.state.imgCar}
            />
          </div>
          <div className="col-5">
            <div className="card text-dark ">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div className="row border border-light pt-3 pb-3"  style={{ cursor: "pointer" }}>
                  <img
                    src="./images/icon-black.jpg"
                    alt="black car"
                    className="col-2"
                    onClick={() =>
                      this.setState({ imgCar: "./images/black-car.jpg" })
                    }
                   
                  />
                  <div className="col-10">
                    <h3>Crystal Black</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-light pt-3 pb-3" style={{ cursor: "pointer" }}>
                  <img
                    src="./images/icon-silver.jpg"
                    alt="silver car"
                    className="col-2"
                    onClick={() =>
                      this.setState({ imgCar: "./images/silver-car.jpg" })
                    }
                  />
                  <div className="col-10">
                    <h3>Crystal Silver</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-light pt-3 pb-3" style={{ cursor: "pointer" }}>
                  <img
                    src="./images/icon-steel.jpg"
                    alt="steel car"
                    className="col-2"
                    onClick={() =>
                      this.setState({ imgCar: "./images/steel-car.jpg" })
                    }
                  />
                  <div className="col-10">
                    <h3>Crystal Steel</h3>
                    <p>Pearl</p>
                  </div>
                </div>
                <div className="row border border-light pt-3 pb-3" style={{ cursor: "pointer" }}>
                  <img
                    src="./images/icon-red.jpg"
                    alt="red car"
                    className="col-2"
                    onClick={() =>
                      this.setState({ imgCar: "./images/red-car.jpg" })
                    }
                  />
                  <div className="col-10">
                    <h3>Crystal Red</h3>
                    <p>Pearl</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
