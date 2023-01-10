import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { usePutSlide, useGetYears } from "../../hooks"
import actions from "./actions"

const initialState = {
  status: "idle",
  titles: ["Codigo", "Categoria", "Fecha"],
  listButtons: [
    {title:"Este año", value:"Year"},
    {title:"Este mes", value:"Month"},
    {title:"Hoy", value:"Day"},
  ],
  dataSource: [],
  years: [],
  months: [
    {title: "", value: "0"},
    {title: "Enero", value: "1"},
    {title: "Febrero", value: "2"},
    {title: "Marzo", value: "3"},
    {title: "Abril", value: "4"},
    {title: "Mayo", value: "5"},
    {title: "Junio", value: "6"},
    {title: "Julio", value: "7"},
    {title: "Agosto", value: "8"},
    {title: "Septiembre", value: "9"},
    {title: "Octubre", value: "10"},
    {title: "Noviembre", value: "11"},
    {title: "Diciembre", value: "12"},
  ],
  temporality: "",
  findByYear: "",
  findByMonth: ""
}
export const adminState = createSlice({
  name: "admin",
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(usePutSlide.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(usePutSlide.rejected, (state) => {
        state.status = 'failed'
        toast.error('Ups! Algo salio mal')
      })
      .addCase(usePutSlide.fulfilled, (state, actions) =>{
        state.status = 'idle'
        if(!actions.payload || actions.payload.gdscode){
          toast.error('Ups! Algo salio mal')
          return
        }
        state.dataSource = actions.payload
      })
      .addCase(useGetYears.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(useGetYears.rejected, (state) => {
        state.status = 'failed'
        toast.error('Ups! Algo salio mal')
      })
      .addCase(useGetYears.fulfilled, (state, actions) => {
        state.status = 'idle'
        if(!actions.payload){
          toast.error('Ups! Algo salio mal')
          return          
        }
        state.years = []
        actions.payload.map(year => state.years.push(year[Object.keys(year)[0]]))
      })
  },
})

export const selectTitles = (state:AppState) => state.admin.titles
export const selectListButtons = (state:AppState) => state.admin.listButtons
export const selectDataSource = (state:AppState) => state.admin.dataSource
export const selectYears = (state:AppState) => state.admin.years
export const selectMonths = (state:AppState) => state.admin.months
export const selectTemporality = (state:AppState) => state.admin.temporality
export const selectFindByMonth = (state:AppState) => state.admin.findByMonth
export const selectFindByYear = (state:AppState) => state.admin.findByYear

export const { setByYear, setByMonth, setTemporality } = adminState.actions

export default adminState.reducer