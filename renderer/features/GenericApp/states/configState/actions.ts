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
  setLunchEnd: (state, {payload}: PayloadAction<string>) => {
    state.lunchEnd = payload
  },
  setDinnerTime: (state, {payload}: PayloadAction<string>) => {
    state.dinnerTime = payload
  },
  setDinnerEnd: (state, {payload}: PayloadAction<string>) => {
    state.dinnerEnd = payload
  },
  setBreakfastPrice: (state, {payload}: PayloadAction<number>) => {
    state.breakfastPrice = payload < 0 ? 0 : payload 
  },
  setBreakfastSubsidy: (state, {payload}: PayloadAction<number>) => {
    state.breakfastSubsidy = payload < 0 ? 0 : payload 
  },
  setLunchPrice: (state, {payload}: PayloadAction<number>) => {
    state.lunchPrice = payload < 0 ? 0 : payload 
  },
  setLunchSubsidy: (state, {payload}: PayloadAction<number>) => {
    state.lunchSubsidy = payload < 0 ? 0 : payload 
  },
  setDinnerPrice: (state, {payload}: PayloadAction<number>) => {
    state.dinnerPrice = payload < 0 ? 0 : payload 
  },
  setDinnerSubsidy: (state, {payload}: PayloadAction<number>) => {
    state.dinnerSubsidy = payload < 0 ? 0 : payload 
  },
  setCodeSize: (state, {payload}: PayloadAction<number>) => {
    state.codeSize = payload < 0 ? 0 : payload 
  }
}

export default actions