import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  setCurrPage: (state, {payload}: PayloadAction<string>) => {
    state.currPage = payload
  }
}

export default actions