import { combineReducers } from "redux";
import productReducer from "./ProductStateReducer";

const rootReducer = combineReducers({
  product: productReducer,
});
//store tong cua ung dung

export default rootReducer;
