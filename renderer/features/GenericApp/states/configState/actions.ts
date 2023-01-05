import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  setCompanyName: (state, {payload}: PayloadAction<string>) => {
    state.companyName = payload
  },
  setBreakfastTime: (state, {payload}: PayloadAction<string>) => {
    state.breakfastTime = payload
  },
  setLunchTime: (state, {payload}: PayloadAction<string>) => {
    state.lunchTime = payload
  },
  setDinnerTime: (state, {payload}: PayloadAction<string>) => {
    state.dinnerTime = payload
  },
  setCodeSize: (state, {payload}: PayloadAction<number>) => {
    state.codeSize = payload < 0 ? 0 : payload 
  },
}

export default actions