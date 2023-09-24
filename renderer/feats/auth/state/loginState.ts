import { createSlice } from "@reduxjs/toolkit"
import { loginActions } from "./actions"
import { AppState } from "../../../data/store/types"
import { usePostLogin } from "../hooks"
import LocalStorage from "../../../libs/localStorage"
import { useGetCurrUser } from "../hooks/useGetCurrUser"
const initialState = {
  username: '',
  password: '',
  currentUser: JSON.parse(LocalStorage.get('currUser') || null)
}

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: loginActions,
  extraReducers(builder) {
      builder
        .addCase(usePostLogin.fulfilled, (state, {payload}:any) => {
          LocalStorage.set('currUser', JSON.stringify(payload))
          state.currentUser = payload
        })
        .addCase(useGetCurrUser.fulfilled, (state, {payload}:any) => {
          console.log(payload)
        })
  },
})

export const selectLogin = (state: AppState) => state.auth.login
export const { setUsername, setPassword } = loginSlice.actions

export const loginReducer = loginSlice.reducer