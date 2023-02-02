import { AdminFilterPad, Spinner } from "../../../../components/ui"
import { useAppDispatch } from "../../../../hooks"
import { calendarToDate, convertTotalsToReport, exportCSV, formatMoney, getColumnByIndex, getWhereByCase, isNumber, reportGenerator } from "../../../../utils"
import { cleanRadioButton } from "../../../../utils/cleanRadioButton"
import { useGetYears, usePutTotals } from "../../hooks"
import { setByMonth, setByQueryWhere, setByYear, setCategory, setDateFrom, setDateTo, setTemporality } from "../../states/adminState/adminState"
import { RowDisplayLabels } from "../RowDisplayLabels.tsx/RowDisplayLabels"

export const AdminLiteFrame = ({admin}) => {
  const dispatch = useAppDispatch()
  const { listButtons, categories, category, externalLoad, totals, titlesLite, dateFrom, dateFrom1 } = admin
  if (externalLoad){
    dispatch(usePutTotals({queryWhere:'', category: 'GENERAL'}))
    dispatch(useGetYears())
    return <Spinner />
  }
  const onChangeComboBox = (inValue:string) => {
    if(!isNumber(inValue)){
      dispatch(setCategory(inValue))
      const category = inValue
      dispatch(usePutTotals({category}))
      return 
    }
    cleanRadioButton("temp")
    inValue.length == 4 ? dispatch(setByYear(inValue)) : dispatch(setByMonth(inValue))
    const queryWhere = getWhereByCase(inValue)
    dispatch(usePutTotals({queryWhere, category}))
  }
  return (
    <div className="mt-2">
      <AdminFilterPad 
        radioOptions={listButtons}
        onClickRadio={async(e) => {
          const queryWhere = getWhereByCase(e)
          dispatch(setTemporality(e))
          await dispatch(setByQueryWhere(queryWhere))
          dispatch(usePutTotals({queryWhere, category}))
        }}
        onChangeComboBox={e => onChangeComboBox(e)}
        categories={categories}
        selectedCategory={category}
        onClickPrint={() => reportGenerator(titlesLite, convertTotalsToReport(totals), null, `${calendarToDate(dateFrom).replaceAll(".", "/")} ${calendarToDate(dateFrom1).replaceAll(".", "/")}`.replaceAll("'", ""))}
        onClickReport={() => exportCSV(titlesLite, convertTotalsToReport(totals))}
        dateFrom={dateFrom}
        dateTo={dateFrom1}
        onChangeDateFrom={e => {
          if(dateFrom){
            dispatch(setDateFrom(e))
            console.log(`${calendarToDate(e)}, ${calendarToDate(dateFrom1)}`)
            dispatch(usePutTotals({queryWhere: `${calendarToDate(e)}, ${calendarToDate(dateFrom1)}`, category}))
          }
        }}
        onChangeDateTo={e => {
          if(dateFrom1){
            dispatch(setDateTo(e))
            console.log(`${calendarToDate(dateFrom)}, ${calendarToDate(e)}`)
            dispatch(usePutTotals({queryWhere: `${calendarToDate(dateFrom)}, ${calendarToDate(e)}`, category}))
          }
        }}/>
      {
        totals ? 
          <div className="row">
            <RowDisplayLabels
              rowType="breakfast" 
              countValue={`${getColumnByIndex(totals, 0) || 0}`}
              totalPrice={`${formatMoney(getColumnByIndex(totals, 1) || 0)}`}
              totalSubsidy={`${formatMoney(getColumnByIndex(totals, 2) || 0)}`}
              total={`${formatMoney(getColumnByIndex(totals, 3) || 0)}`}/>
            <RowDisplayLabels
              rowType="lunch" 
              countValue={`${getColumnByIndex(totals, 4) || 0}`}
              totalPrice={`${formatMoney(getColumnByIndex(totals, 5) || 0)}`}
              totalSubsidy={`${formatMoney(getColumnByIndex(totals, 6) || 0)}`}
              total={`${formatMoney(getColumnByIndex(totals, 7) || 0)}`}/>
            <RowDisplayLabels
              rowType="dinner" 
              countValue={`${getColumnByIndex(totals, 8) || 0}`}
              totalPrice={`${formatMoney(getColumnByIndex(totals, 9) || 0)}`}
              totalSubsidy={`${formatMoney(getColumnByIndex(totals, 10) || 0)}`}
              total={`${formatMoney(getColumnByIndex(totals, 11) || 0)}`}/>
            <RowDisplayLabels
              rowType="total" 
              countValue={`${getColumnByIndex(totals, 12) || 0}`}
              totalPrice={`${formatMoney(getColumnByIndex(totals, 13) || 0)}`}
              totalSubsidy={`${formatMoney(getColumnByIndex(totals, 14) || 0)}`}
              total={`${formatMoney(getColumnByIndex(totals, 15) || 0)}`}/>
          </div> 
          : <Spinner />
      }
    </div>
  )
}