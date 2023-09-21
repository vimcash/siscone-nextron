import { createSlice } from "@reduxjs/toolkit"
import { loginActions } from "./actions"
import { AppState } from "../../../data/store/types"

const initialState = {
  username: '',
  password: ''
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: loginActions
})

export const selectLogin = (state: AppState) => state.auth.login
export const { setUsername, setPassword } = loginSlice.actions

export const loginReducer = loginSlice.reducer