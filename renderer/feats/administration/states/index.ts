import { combineReducers } from "@reduxjs/toolkit";
import { productReducer } from "./productState";
import { categoryReducer } from "./categoryState";

export const adminReducer = combineReducers({
  product: productReducer,
  category: categoryReducer
})