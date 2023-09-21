import { createSlice } from "@reduxjs/toolkit"
import { categoryActions } from "./actions"
import { AppState } from "../../../data/store/types"

const initialState = {
  toggleForm: false
}

const productSlice = createSlice({
  name: 'category',
  initialState,
  reducers: categoryActions
})

export const selectToggle = (state: AppState) => state.admin.category.toggleForm
export const selectCategory = (state: AppState) => state.admin.category
export const { setToggleForm } = productSlice.actions

export const categoryReducer = productSlice.reducer