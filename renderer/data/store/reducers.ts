import { combineReducers } from "@reduxjs/toolkit"
import templateReducer from "../../features/Template/states/templateState"
const reducers = combineReducers({
  template: templateReducer
})

export default reducers