import { PayloadAction } from "@reduxjs/toolkit"

export const loginActions = {
  setUsername: (state:any, {payload}:PayloadAction<string>) => {
    state.username = payload
  },
  setPassword: (state:any, {payload}:PayloadAction<string>) => {
    state.password = payload
  },
}