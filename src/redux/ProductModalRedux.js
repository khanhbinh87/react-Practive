import React, { Component } from "react";
import { connect } from "react-redux";
class ProductModalRedux extends Component {
  render() {
    const { productState } = this.props;

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
          className="modal-dialog"
          role="document"
          style={{ minWidth: "800px" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>Ma san pham</th>
                    <th>Hinh anh</th>
                    <th>Ten san pham</th>
                    <th>Gia</th>
                    <th>So luong</th>
                    <th>Thanh tien</th>
                  </tr>
                </thead>
                <tbody>
                  {productState.map((item, idx) => {
                    return (
                      <tr key={idx}>
                        <td>{item.maSp}</td>
                        <td>{item.hinhANh}</td>
                        <td>{item.tenSp}</td>
                        <td>{item.gia}</td>
                        <td>{item.soLuong}</td>
                        <td>{item.gia * item.soLuong}</td>
                      </tr>
                    );
                  })}
                </tbody>
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
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productState: state.product.productDetail,
  };
};
export default connect(mapStateToProps)(ProductModalRedux);
