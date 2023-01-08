import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { usePostSlide } from "../../hooks"
import actions from "./actions"

const initialState = {
  currentCode: "",
  lastCode: "",
  status: "idle"
}

export const slideState = createSlice({
  name: "slide",
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(usePostSlide.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(usePostSlide.rejected, (state) => {
        state.status = 'failed'
        state.currentCode = ""
        toast.error('Ups! Algo salio mal')
      })
      .addCase(usePostSlide.fulfilled, (state, actions) => {
        state.status = 'idle'
        if(!actions.payload){
          toast.error('Ups! Algo salio mal')
          state.currentCode = ""
          return
        }
        state.lastCode = state.currentCode
        state.currentCode = ""
      })
  },
})

export const selectCurrentCode = (state:AppState) => state.slide.currentCode
export const selectLastCode = (state:AppState) => state.slide.lastCode

export const { setCurrentCode } = slideState.actions

export default slideState.reducer