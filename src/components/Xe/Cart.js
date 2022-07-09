import React, { Component } from "react";
import ModalCart from "./ModalCart";

import ProductList from "./ProductList";

export default class Cart extends Component {
  state = {
    gioHang: [],
  };
  themGioHang = (sanPham) => {
    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      donGia: sanPham.giaBan,
      soLuong: 1,
      hinhAnh: sanPham.hinhAnh,
    };
    let newArr = [...this.state.gioHang];
    let item = newArr.find((spGH) => spGH.maSP === spGioHang.maSP);
    if (item) {
      let index = newArr.findIndex((spGH) => spGH.maSP === spGioHang.maSP);
      newArr[index].soLuong += 1;
    } else {
      newArr = [...this.state.gioHang, spGioHang];
    }

    this.setState({ gioHang: newArr });
  };
  xoaGioHang = (maSP) => {
    //Thực hiện tính năng xóa giỏ hàng

    let index = this.state.gioHang.findIndex(
      (spGioHang) => spGioHang.maSP === maSP
    );
    if (index !== -1) {
      this.state.gioHang.splice(index, 1);
    }

    this.setState({
      gioHang: this.state.gioHang,
    });
  };
  tinhTongSoLuong = () => {
    //Dùng for
    // let tongSoLuong = 0;
    // for(let i=0;i<this.state.gioHang.length;i++){
    //     let spGioHang = this.state.gioHang[i];
    //     tongSoLuong += spGioHang.soLuong;
    // }
    // return tongSoLuong;
    //Reduce
    return this.state.gioHang
      .reduce((tongSoLuong, spGioHang, index) => {
        return (tongSoLuong += spGioHang.soLuong);
      }, 0)
      .toLocaleString();
  };
  tanggiamsoluong = (maSP, number) => {
    let gioHang = [...this.state.gioHang];

    let index = gioHang.findIndex((spGioHang) => spGioHang.maSP === maSP);

    if (index !== -1) {
      if (gioHang[index].soLuong <= 1 && number === -1) {
        alert("Số lượng tối thiểu ít nhất là 1!");
        return;
      }

      gioHang[index].soLuong += number;
    }

    this.setState({
      gioHang: gioHang,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="text-right mb-5 mt-5">
          <span
            data-toggle="modal"
            data-target="#modelId"
            style={{ cursor: "pointer" }}
          >
            ({this.tinhTongSoLuong()})<i className="ion-android-cart"></i> Gio
            hang
          </span>
        </div>
        <ModalCart
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tanggiamsoluong={this.tanggiamsoluong}
        />
        <ProductList themGioHang={this.themGioHang} />
      </div>
    );
  }
}
