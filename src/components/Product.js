import React, { Component } from "react";

export default class Product extends Component {
  render() {
    const { item, idx, handleDetail } = this.props;

    return (
      <div className="card p-4" key={idx} style={{ display: "flex" }}>
        <img
          className="card-img-top"
          src={item.hinhAnh}
          alt={item.tenSP}
          style={{ height: "240px" }}
        />
        <div className="card-body">
          <h4 className="card-title">{item.tenSP}</h4>
          <p className="card-text">{item.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            style={{ cursor: "pointer" }}
            onClick={() => handleDetail(item)}
          >
            Detail Product
          </button>
        </div>
      </div>
    );
  }
}
