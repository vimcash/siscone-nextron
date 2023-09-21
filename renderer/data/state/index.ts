import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store/types"

const initialState = {

}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {}
})

export const selectIsLogin = (state:AppState) => state.auth?.isLogin || false
export const globalReducer = globalSlice.reducer