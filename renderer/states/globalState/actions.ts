import { PayloadAction } from "@reduxjs/toolkit"
import { setDelay, setLocalStorage } from "../../utils"

const actions = {
  setCurrPage: (state, {payload}: PayloadAction<string>) => {
    setLocalStorage('currPage', payload)
    state.currPage = payload
  },
  setFirstTime: (state) => {
    state.firstRun = false
  }
}

export default actions