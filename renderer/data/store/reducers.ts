import { combineReducers } from "@reduxjs/toolkit"
import globalReducer from "../../states/globalState"
import configReducer from "../../features/GenericApp/states/configState"
import slideReducer from "../../features/CoreApp/states/slideState"
const reducers = combineReducers({
  global: globalReducer,
  config: configReducer,
  slide: slideReducer
})

export default reducers