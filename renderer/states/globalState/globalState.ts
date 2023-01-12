import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../data/store/types"
import { useReadConfig } from "../../hooks";
import { getLocalStorage, readConfig, setLocalStorage } from "../../utils";
import actions from "./actions"

const pjson = require('../../../package.json');
const currPage = getLocalStorage('currPage')
const initialState = {
  firstRun: true,
  currPage: currPage,
  version: pjson.version,
  dbHost: '127.0.0.1'
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(useReadConfig.fulfilled, (state, action)=>{
        if(action.payload && state.dbHost != action.payload.dbHost){
          state.dbHost = action.payload.dbHost
        }
      })
  },
})

export const selectCurrPage = (state: AppState) => state.global.currPage
export const selectVersion = (state: AppState) => state.global.version
export const selectFirstRun = (state: AppState) => state.global.firstRun
export const selectDbHost = (state: AppState) => state.global.dbHost

export const { setCurrPage, setFirstTime } = globalSlice.actions

export default globalSlice.reducer