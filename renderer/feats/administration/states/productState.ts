import { createSlice } from "@reduxjs/toolkit"
import { productActions } from "./actions"
import { AppState } from "../../../data/store/types"

const initialState = {
  toggleForm: false
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: productActions
})

export const selectToggle = (state: AppState) => state.admin.product.toggleForm
export const selectProduct = (state: AppState) => state.admin.product
export const { setToggleForm } = productSlice.actions

export const productReducer = productSlice.reducer