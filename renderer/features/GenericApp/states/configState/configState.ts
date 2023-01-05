import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { AppState } from "../../../../data/store/types";
import { dateTimeFormat } from "../../../../utils";
import { Config } from "../../data/interfaces";
import { useGetConfig, usePostConfig } from "../../hooks";
import actions from "./actions";

const initialState:Config = {
  companyName: "",
  breakfastTime: "",
  lunchTime: "",
  dinnerTime: "",
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
        state.breakfastTime = action.payload.breakfastTime
        state.lunchTime = action.payload.lunchTime
        state.dinnerTime = action.payload.dinnerTime
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
        console.log(action.payload)
        state.companyName = action.payload.COMPANY_NAME
        state.breakfastTime = action.payload.breakfastTime
        state.lunchTime = action.payload.lunchTime
        state.dinnerTime = action.payload.dinnerTime
        state.codeSize = action.payload.CODE_SIZE
        toast.success('Configuracion guardada exitosamente!')
        return
      })
  }
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