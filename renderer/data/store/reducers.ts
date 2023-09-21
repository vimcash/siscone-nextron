import { combineReducers } from "@reduxjs/toolkit"
import { leftMenuReducer } from "../../layout/LeftMenu/state"
import { globalReducer } from "../state"
import { popupReducer } from "../../layout/Popup/state"
import { adminReducer } from "../../feats/administration/states"
import { authReducer } from "../../feats/auth/state"
const reducers = combineReducers({
  global: globalReducer,
  leftMenu: leftMenuReducer,
  popup: popupReducer,
  admin: adminReducer,
  auth: authReducer
})

export default reducers