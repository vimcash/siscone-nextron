import { createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"

const initialState = {
  popupType: 'hide'
}

const popupSlice = createSlice({
  name: "popupSlice",
  initialState,
  reducers: actions
})

export const selectPopup = (state: AppState) => state.popup
export const { showAddProduct, hidePopup } = popupSlice.actions

export const popupReducer = popupSlice.reducer