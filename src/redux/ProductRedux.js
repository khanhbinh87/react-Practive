import React, { Component } from "react";
import ProductListRedux from "./ProductListRedux";
import ProductModalRedux from "./ProductModalRedux";

export default class ProductRedux extends Component {
  render() {
    return (
      <div className="container">
        <h3>Danh sach san pham</h3>
        <div className="text-right mb-5 mt-5">
          <span
            data-toggle="modal"
            data-target="#modelId"
            style={{ cursor: "pointer" }}
          >
            <i className="ion-android-cart"></i>(0) Gio hang
          </span>
        </div>
        <ProductListRedux />
        <ProductModalRedux />
      </div>
    );
  }
}
