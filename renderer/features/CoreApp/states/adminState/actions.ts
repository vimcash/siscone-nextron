import { PayloadAction } from "@reduxjs/toolkit";
import { calendarToDate } from "../../../../utils";

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
  },
  setDateFrom: (state, {payload}: PayloadAction<string>) => {
    if(!payload)
      return 
    state.dateFrom = Number(payload.replaceAll('-', '')) > Number(state.dateFrom1.replaceAll('-', '')) ?
      state.dateTo : payload
  },
  setDateTo: (state, {payload}: PayloadAction<string>) => {
    if(!payload)
      return 
    state.dateFrom1 = Number(payload.replaceAll('-', '')) < Number(state.dateFrom.replaceAll('-', '')) ?
      state.dateFrom : payload
  },
  setByQueryWhere: (state, {payload}: PayloadAction<string>) => {
    if(!payload)
      return
    const datesArray = 
      payload
        .replaceAll(" " , "")
        .replaceAll("'", "")
        .split(",")
    state.dateFrom = `${calendarToDate(datesArray[0], ".").replaceAll("'", "").replaceAll(".", "-")}`
    state.dateFrom1 = `${calendarToDate(datesArray[1], ".").replaceAll("'", "").replaceAll(".", "-")}`
    console.log(state.dateFrom, state.dateFrom1)
  }
}

export default actions