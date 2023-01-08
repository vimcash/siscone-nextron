import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  setCurrentCode: (state, {payload}: PayloadAction<string>) => {
    state.currentCode = payload
  }
}

export default actions