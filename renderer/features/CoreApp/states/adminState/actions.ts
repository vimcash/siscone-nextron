import { PayloadAction } from "@reduxjs/toolkit";
import { calendarToDate, getCheckBoxByTemp } from "../../../../utils";

const actions = {
  setTemporality: (state, {payload}: PayloadAction<string>) => {
    state.checkbox = getCheckBoxByTemp(payload)
  },
  setInitToCheckbox: (state) => {
    state.checkbox = getCheckBoxByTemp("")
    console.log(state.checkbox)
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
  },
  setGoToDetail: (state) => {
    state.goToDetail = true
  }
}

export default actions