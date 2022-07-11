const initialState = {
  productDetail: [],
};
const product = (state = initialState, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG":
      {
        console.log(action);
        let index = state.productDetail.findIndex(
          (product) => product.maSP === action.sanPham.maSP
        );
        console.log(index);
        if (index !== -1) {
          console.log("giong");
          state.productDetail[index].soLuong += 1;
        }
        console.log("khac");
        state.productDetail.push(action.sanPham);

        console.log(state);
        state.productDetail = [...state.productDetail];
      }
      return { ...state };
  }
  return state;
};
export default product;
