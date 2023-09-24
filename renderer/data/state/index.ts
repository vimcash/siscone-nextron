import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store/types"

const initialState = {
  appReady: false
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {}
})

export const selectIsLogin = (state:AppState) => state.auth?.isLogin || false
export const selectAppReady = (state:AppState) => state.global.appReady
export const globalReducer = globalSlice.reducer