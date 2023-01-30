import { PayloadAction } from "@reduxjs/toolkit";

const actions = {
  setTemporality: (state, {payload}: PayloadAction<string>) => {
    state.findByYear = `${(new Date()).getFullYear()}`
    state.findByMonth = payload == "Month" ? `${(new Date()).getMonth() + 1}` : ""
  },
  setByYear: (state, {payload}: PayloadAction<string>) => {
    state.findByYear = payload
    state.findByMonth = ""
  },
  setByMonth: (state, {payload}: PayloadAction<string>) => {
    state.findByMonth = payload
    state.findByYear = `${(new Date()).getFullYear()}`
  },
  setCategory: (state, {payload}: PayloadAction<string>) => {
    state.category = payload
  },
  setQueryWhere: (state, {payload}: PayloadAction<string>) => {
    state.queryWhere = payload
  },
  setExternalLoad: (state) => {
    state.externalLoad = true
  }
}

export default actions