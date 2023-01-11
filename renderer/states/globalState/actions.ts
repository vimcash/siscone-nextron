import { PayloadAction } from "@reduxjs/toolkit"
import { setLocalStorage } from "../../utils"

const actions = {
  setCurrPage: (state, {payload}: PayloadAction<string>) => {
    setLocalStorage('currPage', payload)
    state.currPage = payload
  }
}

export default actions