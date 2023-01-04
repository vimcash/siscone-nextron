import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../../../data/store/types";
import actions from "./actions";

const initialState:any = {
  companyName: "",
  breakfastTime: "",
  lunchTime: "",
  dinnerTime: "",
  codeSize: "",
}

export const configState = createSlice({
  name: "config",
  initialState,
  reducers: actions
})

export const selectCompanyName = (state:AppState) => state.config.companyName
export const selectBreakfastTime = (state:AppState) => state.config.breakfastTime
export const selectLunchTime = (state:AppState) => state.config.lunchTime
export const selectDinnerTime = (state:AppState) => state.config.dinnerTime
export const selectCodeSize = (state:AppState) => state.config.codeSize

export const {
  setCompanyName,
  setBreakfastTime,
  setLunchTime,
  setDinnerTime,
  setCodeSize,
} = configState.actions

export default configState.reducer