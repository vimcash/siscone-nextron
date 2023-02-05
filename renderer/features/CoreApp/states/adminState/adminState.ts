import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { formatDate, toTotalsDetail } from "../../../../utils"
import { usePutSlide, useGetYears } from "../../hooks"
import { usePutTotals } from "../../hooks/usePutTotals"
import actions from "./actions"

const initialState = {
  status: "idle",
  titles: ["Codigo", "Categoria", "Precio", "Subsidio", "Fecha"],
  titlesLite: ["Categoria", "Cantidad", "Empleado", "Subsidio", "Total"],
  categories: ["GENERAL", "DESAYUNO", "ALMUERZO", "CENA"],
  listButtons: [
    {title:"Este año", value:"Year"},
    {title:"Este mes", value:"Month"},
    {title:"Hoy", value:"Day"},
  ],
  totalsDetail: {
    breakfast: 0,
    lunch: 0,
    dinner: 0,
    money: 0,
    subsidy: 0,
    total: 0
  },
  dataSource: [],
  totals: {},
  years: [],
  goToDetail: false,
  dateFrom: formatDate(new Date(), 'yyyy-MM-01'), 
  dateFrom1: formatDate(new Date(), 'yyyy-NM-01'), 
  temporality: "",
  checkbox: {
    year: false,
    month: true,
    day: false
  },
  category: "GENERAL",
  queryWhere: "",
  externalLoad: false,
  loading: false,
  adminVersion: "lite"
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
        if(!actions.payload.slides || actions.payload.slides.gdscode){
          toast.error('Ups! Algo salio mal')
          return
        }
        state.dataSource = actions.payload.slides
        state.totalsDetail = toTotalsDetail(actions.payload.totals)
        console.log(state.totalsDetail)
        state.goToDetail = false
      })
      .addCase(usePutTotals.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(usePutTotals.rejected, (state) => {
        state.status = 'failed'
        toast.error('Ups! Algo salio mal')
      })
      .addCase(usePutTotals.fulfilled, (state, actions) =>{
        state.status = 'idle'
        if(!actions.payload || actions.payload.gdscode){
          toast.error('Ups! Algo salio mal')
          return
        }
        state.totals = actions.payload
        state.externalLoad = false
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
export const selectCategories = (state:AppState) => state.admin.categories
export const selectCategory = (state:AppState) => state.admin.category
export const selectListButtons = (state:AppState) => state.admin.listButtons
export const selectDataSource = (state:AppState) => state.admin.dataSource
export const selectTemporality = (state:AppState) => state.admin.temporality
export const selectQueryWhere = (state:AppState) => state.admin.selectQueryWhere
export const selectAdmin = (state:AppState) => state.admin

export const { setTemporality, setCategory, setQueryWhere, setExternalLoad, setDateFrom, setDateTo, setByQueryWhere, setGoToDetail, setInitToCheckbox } = adminState.actions

export default adminState.reducer