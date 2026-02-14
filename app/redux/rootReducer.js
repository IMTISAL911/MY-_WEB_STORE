import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
});
