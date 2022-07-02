import React, { Component } from "react";
import Product from "./Product";

export default class ListProduct extends Component {
  state = {
    productDetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  listProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  handleDetail = (newItem) => {
    this.setState({
      productDetail: newItem,
    });
  };

  render() {
    const { productDetail } = this.state;
    return (
      <div className="container ">
        <h3>List Products</h3>
        <div className="row">
          {this.listProduct.map((item, idx) => {
            return (
              <div
                key={item + idx}
                className="col-4 text-center"
                style={{ display: "flex" }}
              >
                <Product
                  item={item}
                  idx={idx}
                  handleDetail={this.handleDetail}
                />
              </div>
            );
          })}
        </div>

        <div className="row ">
          <div className="col-4 pt-5 text-center">
            <h3>{productDetail.tenSP}</h3>
            <img
              style={{ width: "100%", height: "100%" }}
              src={productDetail.hinhAnh}
              alt={productDetail.tenSP}
            />
          </div>
          <div className="col-8  pt-5">
            <h3 className="text-center">Thong so ky thuat</h3>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Man hinh</th>
                  <th>{this.state.productDetail.manHinh}</th>
                </tr>
                <tr>
                  <th>He dieu hanh</th>
                  <th>{this.state.productDetail.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera truoc</th>
                  <th>{this.state.productDetail.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{this.state.productDetail.cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{this.state.productDetail.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{this.state.productDetail.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
