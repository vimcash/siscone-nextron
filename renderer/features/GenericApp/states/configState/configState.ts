import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AppState } from "../../../../data/store/types";
import { Config } from "../../data/interfaces";
import { useGetConfig, usePostConfig } from "../../hooks";
import actions from "./actions";

const initialState:Config = {
  companyName: "",
  breakfastTime: "",
  lunchTime: "",
  lunchEnd: "",
  dinnerTime: "",
  dinnerEnd: "",
  breakfastPrice: 0,
  breakfastSubsidy: 0,
  lunchPrice: 0,
  lunchSubsidy: 0,
  dinnerPrice: 0,
  dinnerSubsidy: 0,
  codeSize: 0,
  status: "idle",
}

export const configState = createSlice({
  name: "config",
  initialState,
  reducers: actions,
  extraReducers(builder){
    builder
      .addCase(useGetConfig.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(useGetConfig.rejected, (state) => {
        state.status = 'failed'
        toast.error('Ups! Algo salio mal')
      })
      .addCase(useGetConfig.fulfilled, (state, action) => {
        state.status = 'idle'
        if(!action.payload){
          toast.error('Ups! Algo salio mal')
          return
        }
        state.companyName = action.payload.COMPANY_NAME
        state.breakfastTime = action.payload.BREAKFAST_TIME
        state.lunchTime = action.payload.LUNCH_TIME
        state.lunchEnd = action.payload.LUNCH_END
        state.dinnerTime = action.payload.DINNER_TIME
        state.dinnerEnd = action.payload.DINNER_END
        state.breakfastSubsidy = (action.payload.BREAKFAST_SUBSIDY).toFixed(2)
        state.breakfastPrice = (action.payload.BREAKFAST_PRICE).toFixed(2)
        state.lunchPrice = (action.payload.LUNCH_PRICE).toFixed(2)
        state.lunchSubsidy = (action.payload.LUNCH_SUBSIDY).toFixed(2)
        state.dinnerPrice = (action.payload.DINNER_PRICE).toFixed(2)
        state.dinnerSubsidy = (action.payload.DINNER_SUBSIDY).toFixed(2)
        state.codeSize = action.payload.CODE_SIZE
      })
      .addCase(usePostConfig.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(usePostConfig.rejected, (state) => {
        state.status = 'failed'
        toast.error('Ups! Algo salio mal guardando la configuracion')
      })
      .addCase(usePostConfig.fulfilled, (state, action) => {
        state.status = 'idle'
        if(!action.payload) {
          toast.error('Ups! Algo salio mal')
          return 
        }
        state.companyName = action.payload.COMPANY_NAME
        state.breakfastTime = action.payload.BREAKFAST_TIME
        state.lunchTime = action.payload.LUNCH_TIME
        state.lunchEnd = action.payload.LUNCH_END
        state.dinnerTime = action.payload.DINNER_TIME
        state.dinnerEnd = action.payload.DINNER_END
        state.breakfastSubsidy = (action.payload.BREAKFAST_SUBSIDY).toFixed(2)
        state.breakfastPrice = (action.payload.BREAKFAST_PRICE).toFixed(2)
        state.lunchPrice = (action.payload.LUNCH_PRICE).toFixed(2)
        state.lunchSubsidy = (action.payload.LUNCH_SUBSIDY).toFixed(2)
        state.dinnerPrice = (action.payload.DINNER_PRICE).toFixed(2)
        state.dinnerSubsidy = (action.payload.DINNER_SUBSIDY).toFixed(2)
        state.codeSize = action.payload.CODE_SIZE
        toast.success('Configuracion guardada exitosamente!')
        return
      })
  }
})

export const selectCompanyName = (state:AppState) => state.config.companyName
export const selectBreakfastTime = (state:AppState) => state.config.breakfastTime
export const selectLunchTime = (state:AppState) => state.config.lunchTime
export const selectLunchEnd = (state:AppState) => state.config.lunchTime
export const selectDinnerTime = (state:AppState) => state.config.dinnerTime
export const selectDinnerEnd = (state:AppState) => state.config.dinnerTime
export const selectBreakfastPrice = (state:AppState) => state.config.breakfastPrice
export const selectBreakfastSubsidy = (state:AppState) => state.config.breakfastSubsidy
export const selectLunchPrice = (state:AppState) => state.config.lunchPrice
export const selectLunchSubsidy = (state:AppState) => state.config.lunchSubsidy
export const selectDinnerPrice = (state:AppState) => state.config.dinnerPrice
export const selectDinnerSubsidy = (state:AppState) => state.config.dinnerSubsidy
export const selectCodeSize = (state:AppState) => state.config.codeSize
export const selectConfig = (state:AppState) => state.config

export const {
  setCompanyName,
  setBreakfastTime,
  setLunchTime,
  setLunchEnd,
  setDinnerTime,
  setDinnerEnd,
  setBreakfastPrice,
  setBreakfastSubsidy,
  setLunchPrice,
  setLunchSubsidy,
  setDinnerPrice,
  setDinnerSubsidy,
  setCodeSize,
} = configState.actions

export default configState.reducer