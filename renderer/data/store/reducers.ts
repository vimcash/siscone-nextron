import { combineReducers } from "@reduxjs/toolkit"
import globalReducer from "../../states/globalState"
import configReducer from "../../features/GenericApp/states/configState"
const reducers = combineReducers({
  global: globalReducer,
  config: configReducer
})

export default reducers