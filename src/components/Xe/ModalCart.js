import React, { Component } from "react";
import "./Cart.css";
export default class ModalCart extends Component {
  renderCart = () => {
    let { gioHang, xoaGioHang, tanggiamsoluong } = this.props;

    return gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              src={item.hinhAnh}
              style={{ width: "50px", height: "50px" }}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => tanggiamsoluong(item.maSP, 1)}
            >
              +
            </button>
            {item.soLuong}
            <button
              className="btn btn-primary"
              onClick={() => tanggiamsoluong(item.maSP, -1)}
            >
              -
            </button>
          </td>
          <td>{item.donGia.toLocaleString()}</td>
          <td>{(item.donGia * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaGioHang(item.maSP)}
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };
  tinhTongTien = () => {
    let { gioHang } = this.props;
    return gioHang
      .reduce((tongTien, spGioHang, index) => {
        return (tongTien += spGioHang.soLuong * spGioHang.donGia);
      }, 0)
      .toLocaleString();
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog "
          role="document"
          style={{ maxWidth: "1200px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">San pham</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table" style={{ verticalAlign: "middle" }}>
                <thead>
                  <tr>
                    <th>Ma san pham</th>
                    <th>Hinh anh</th>
                    <th>Ten san pham</th>
                    <th>So luong</th>
                    <th>Don gia</th>
                    <th>Thanh tien</th>
                  </tr>
                </thead>
                <tbody>{this.renderCart()}</tbody>
                <tfoot>
                  <tr>
                    <td colSpan="5"></td>
                    <td>Tổng tiền</td>
                    <td>{this.tinhTongTien()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
