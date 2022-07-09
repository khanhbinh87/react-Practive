import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item } = this.props;

    return (
      <div className="card ">
        <img
          className="card-img-top"
          src={item.hinhAnh}
          alt={item.hinhAnh}
          style={{ width: "100%", height: "100%" }}
        />
        <div className="card-body">
          <h4 className="card-title">{item.tenSP}</h4>
          <p className="card-text">{item.giaBan.toLocaleString()}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(item);
            }}
          >
            Them gio hang
          </button>
        </div>
      </div>
    );
  }
}
