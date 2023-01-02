import { createSlice } from "@reduxjs/toolkit";
import actions from "./actions";
import { ExampleInterface } from "../data/interfaces/ExampleInterface";
import { AppState } from "../../../data/store/types";

const initialState: ExampleInterface = {
  example1: "",
  example2: ""
}

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: actions,
  extraReducers(builder){
    builder
  }
})

export const selectExample1 = (state: AppState) => state.template.example1
export const selectExample2 = (state: AppState) => state.template.example2

export const { setExample1, setExample2, setClean } = templateSlice.actions

export default templateSlice.reducer