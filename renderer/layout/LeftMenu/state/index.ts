import { createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"

const initialState = {
  toogleMenu: false
}

const leftMenuSlice = createSlice({
  name: "leftMenu",
  initialState,
  reducers: actions
})

export const selectLeftMenu = (state: AppState) => state.leftMenu
export const { setToggle } = leftMenuSlice.actions

export const leftMenuReducer = leftMenuSlice.reducer