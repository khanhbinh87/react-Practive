import React, { Component } from "react";
import data from "./dataGlasses.json";
export default class Glass extends Component {
  state = {
    glass: {
      id: "1",
      price: "60",
      name: "FENDI F4300",
      url: "./images/glasses/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  handleItemClick = (newItem) => {
    this.setState({ glass: newItem });
  };
  render() {
    const keyFrame = `@keyFrames animationChangeGlasses${Date.now()} {
      from{
        width:0;
        transform:rotate(45deg);
      }
      to{
        width:140px;
        transform:rotate(0deg);
       
      }
    }
    `;
    return (
      <div
        className="text-center"
        style={{
          backgroundImage: "url('./images/glasses/background.jpg')",
          minHeight: "100vh",
        }}
      >
        <style>{keyFrame}</style>
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", minHeight: "100vh" }}
        >
          <h1
            className="text-light"
            style={{
              textTransform: "uppercase",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "20px",
            }}
          >
            Try glasses app online
          </h1>
          <div className="container">
            <div className="row">
              <div className="col-6 text-center">
                <div className="position-relative">
                  <img
                    src="/images/glasses/model.jpg"
                    alt="model"
                    style={{ width: "200px" }}
                    className="pt-5 position-absolute"
                  />
                  <img
                    src={this.state.glass.url}
                    alt={this.state.glass.name}
                    className="position-absolute"
                    style={{
                      width: "140px",
                      top: "102px",
                      right: "102px",
                      opacity: "0.7",
                      animation: `animationChangeGlasses${Date.now()} 1s`,
                    }}
                  />
                </div>
              </div>
              <div className="col-6 text-center">
                <img
                  src="/images/glasses/model.jpg"
                  alt="model"
                  style={{ width: "200px" }}
                  className="pt-5"
                />
              </div>
            </div>
            <div className="d-flex pt-5">
              {data.map((item, index) => {
                return (
                  <img
                    onClick={() => this.handleItemClick(item)}
                    key={index}
                    src={item.url}
                    alt="item.url"
                    style={{ width: "120px", cursor: "pointer" }}
                    className="border border-success  p-2 m-2"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
