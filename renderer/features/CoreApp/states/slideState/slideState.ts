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
        console.log(actions.payload)
        if(!actions.payload || actions.payload == 'NOT OK'){
          toast.error('Ups! Algo salio mal1')
          state.currentCode = ""
          return
        }
        if(actions.payload != 'OK')
        {
          const response = actions.payload.trim() == 'INVALID'? 'Fuera de hora!' : 'Duplicado'
          toast.warning(response)
          state.lastCode = response
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