import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItemRedux extends Component {
  render() {
    const { product } = this.props;

    return (
      <div className="card">
        <img
          className="card-img-top"
          src={product.hinhAnh}
          alt={product.hinhAnh}
          style={{ width: "300px", height: "300px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product.giaBan}</p>
          <button
            className="btn btn-success"
            // data-toggle="modal"
            // data-target="#modelId"
            onClick={() => {
              this.props.themGioHang(product);
            }}
          >
            Them san pham
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themGioHang: (sp) => {
      let sanPham = {
        maSp: sp.maSP,
        tenSp: sp.tenSP,
        hinhAnh: sp.hinhAnh,
        soLuong: 1,
        gia: sp.giaBan,
      };
      dispatch({
        type: "THEM_GIO_HANG",
        sanPham,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductItemRedux);
