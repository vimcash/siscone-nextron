import { PayloadAction } from "@reduxjs/toolkit";

const actions = {
  setTemporality: (state, {payload}: PayloadAction<string>) => {
    state.temporality = payload
  },
  setFindByYear: (state, {payload}: PayloadAction<string>) => {
    state.findByYear = payload
  },
  setFindByMonth: (state, {payload}: PayloadAction<string>) => {
    state.findByMonth = payload
  }
}

export default actions