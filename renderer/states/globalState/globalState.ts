import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../../data/store/types"
import { getLocalStorage } from "../../utils";
import actions from "./actions"

const pjson = require('../../../package.json');
const currPage = getLocalStorage('currPage')
const initialState = {
  firstRun: true,
  currPage: currPage,
  version: pjson.version
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: actions
})

export const selectCurrPage = (state: AppState) => state.global.currPage
export const selectVersion = (state: AppState) => state.global.version
export const selectFirstRun = (state: AppState) => state.global.firstRun

export const { setCurrPage, setFirstTime } = globalSlice.actions

export default globalSlice.reducer