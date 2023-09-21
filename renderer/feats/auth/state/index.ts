import { combineReducers } from "@reduxjs/toolkit";
import { loginReducer } from "./loginState";

export const authReducer = combineReducers({
  login: loginReducer
})