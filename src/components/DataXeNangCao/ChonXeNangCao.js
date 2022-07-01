import React, { Component } from "react";
import "./style.css";
import dataArr from "./arrayFeatures.json";
import dataWheels from "./wheels.json";
export default class ChonXeNangCao extends Component {
  state = {
    currentCar: {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "images-black/images-black-1/",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
  };
  componentDidMount() {
    let scriptTag = document.createElement("script");
    scriptTag.src ="https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2/js-cloudimage-360-view.min.js";
    document.getElementById("scriptTag").appendChild(scriptTag);
  }
  componentDidUpdate() {
    document.querySelector("#carCurrent").innerHTML = "";
    let tagScript = document.createElement("script");
    tagScript.src =
      "https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js";
      
    //clear script cũ trước khi append script mới của thư viện vào

    document.getElementById("scriptTag").innerHTML = "";
    document.getElementById("scriptTag").appendChild(tagScript);
  }
  handleXe = (newCar) => {
    
    this.setState({
      currentCar: newCar,
    });
  };
  handleWheel = (newWheel) => {
    let objWhell = this.state.currentCar.wheels.find(item =>item.idWheel === newWheel.idWheel);
    if(objWhell!== -1) {
        this.setState({currentCar:{...this.state.currentCar,srcImg:objWhell.srcImg}})
    }
  }
  render() {
    return (
      <div className="container ">
        <div className="row pt-5">
          <div className="col-7">
            <div className="col-12">
              <div
                id="carCurrent"
                style={{ minWidth: "100%", minHeight: "100%" }}
                className="cloudimage-360"
                data-folder={"./images/" + this.state.currentCar.srcImg}
                data-filename="civic-{index}.jpg"
                data-amount="8"
              ></div>
             

              <div id="scriptTag"></div>
            </div>
            <div className="card">
              <img className="card-img-top" src="holder.js/100x180/" alt="xe" />
              <div className="card-body">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Text</p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <h2>Exterior Color</h2>
            <div className="row">
              {dataArr.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="col-12 d-flex border p-2 m-2 align-items-center "
                    style={{ borderColor: "gray", cursor: "pointer" }}
                    onClick={() => this.handleXe(item)}
                  >
                    <div className="col-3">
                      <img
                        src={item.img}
                        style={{ width: "100%" }}
                        alt="icon xe"
                      />
                    </div>
                    <div className="col-9">
                      <p>{item.title}</p>
                      <p>{item.type}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <h2>Wheels</h2>
            <div>
              {dataWheels.map((item, idx) => {
                return (
                  <div
                  style={{cursor: "pointer" }}
                  onClick={() => this.handleWheel(item)}
                    key={item + idx}
                    className="col-12 d-flex p-2 border border-color-default m-2"
                  >
                    <img
                      className="card-img-top"
                      src={item.img}
                      style={{ width: "100px" }}
                      alt="xe"
                    />
                    <div className="card-body">
                      <h4 className="card-title">{item.title}</h4>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
