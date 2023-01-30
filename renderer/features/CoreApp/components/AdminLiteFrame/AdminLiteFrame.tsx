import { AdminFilterPad, Spinner } from "../../../../components/ui"
import { useAppDispatch } from "../../../../hooks"
import { convertTotalsToReport, exportCSV, formatMoney, getColumnByIndex, getWhereByCase, isNumber, reportGenerator } from "../../../../utils"
import { cleanRadioButton } from "../../../../utils/cleanRadioButton"
import { useGetYears, usePutTotals } from "../../hooks"
import { setByMonth, setByYear, setCategory, setTemporality } from "../../states/adminState/adminState"
import { RowDisplayLabels } from "../RowDisplayLabels.tsx/RowDisplayLabels"

export const AdminLiteFrame = ({admin}) => {
  const dispatch = useAppDispatch()
  const { listButtons, months, years, categories, findByMonth, findByYear, category, externalLoad, totals, titlesLite } = admin
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
        onClickRadio={e => {
          dispatch(setTemporality(e))
          dispatch(usePutTotals({queryWhere: getWhereByCase(e), category}))
        }}
        onChangeComboBox={e => onChangeComboBox(e)}
        months={months}
        years={years}
        categories={categories}
        selectedMonth={findByMonth}
        selectedYear={findByYear}
        selectedCategory={category}
        onClickPrint={() => reportGenerator(titlesLite, convertTotalsToReport(totals))}
        onClickReport={() => exportCSV(titlesLite, convertTotalsToReport(totals))}/>
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