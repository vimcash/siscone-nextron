import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  setExample1: (state, {payload}: PayloadAction<string>) => {
    state.example1 = payload
  },
  setExample2: (state, {payload}: PayloadAction<string>) => {
    state.example2 = payload
  },
  setClean: (state) => {
    state.example1 = ""
    state.example2 = ""
  }
}

export default actions