import { Table, TitleValueLabel, Spinner, AdminFilterPad } from "../../../../components/ui"
import { useAppDispatch} from "../../../../hooks"
import { calendarToDate, exportCSV, formatMoney, getColumnByIndex, getWhereByCase, isNumber, reportGenerator, setDelay } from "../../../../utils"
import { usePutSlide } from "../../hooks"
import { setTemporality } from "../../states/adminState"
import { setByQueryWhere, setCategory, setDateFrom, setDateTo, setInitToCheckbox } from "../../states/adminState/adminState"

export const AdminFrame = ({ admin }) => {
  const {
    listButtons,
    titles,
    dataSource,
    categories,
    category,
    dateFrom, 
    dateFrom1, 
    goToDetail,
    totalsDetail,
    checkbox
  } = admin
  const {breakfast, lunch, dinner, money, subsidy, total} = totalsDetail
  const dispatch = useAppDispatch()
  const taskDelay = async () => {
    await setDelay(.5)
    await dispatch(usePutSlide({queryWhere: `${calendarToDate(dateFrom)}, ${calendarToDate(dateFrom1)}`, category}))
  }
  if(goToDetail){
    taskDelay()
    return (
      <Spinner />
    )
  }
  const onChangeComboBox = (inValue:string) => {
    if(!isNumber(inValue)){
      dispatch(setCategory(inValue))
      const category = inValue
      dispatch(usePutSlide({category}))
      return 
    }
  }
  return (
    <div className="mt-2">
      <AdminFilterPad
        radioValue={checkbox} 
        radioOptions={listButtons}
        onClickRadio={async(e) => {
          const queryWhere = getWhereByCase(e)
          dispatch(setTemporality(e))
          await dispatch(setByQueryWhere(queryWhere))
          dispatch(usePutSlide({queryWhere, category}))
        }}
        onChangeComboBox={e => onChangeComboBox(e)}
        categories={categories}
        selectedCategory={category}
        onClickPrint={
          () => reportGenerator(
            titles, 
            dataSource, 
            [
              'Total', 
              `${dataSource.length}`, 
              `${formatMoney(money)}`, 
              `${formatMoney(subsidy)}`, 
              `${formatMoney(total)}`
            ], 
            `${calendarToDate(dateFrom).replaceAll(".", "/")} ${calendarToDate(dateFrom1).replaceAll(".", "/")}`.replaceAll("'", ""))}
        onClickReport={
          () => exportCSV(
            titles, 
            dataSource, 
            `Total:,${dataSource.length},${formatMoney(money)},${formatMoney(subsidy)},${formatMoney(total)}`,
            `${calendarToDate(dateFrom).replaceAll(".", "/")},${calendarToDate(dateFrom1).replaceAll(".", "/")}`.replaceAll("'", ""))}
        dateFrom={dateFrom}
        dateTo={dateFrom1}
        onChangeDateFrom={e => {
          if(dateFrom){
            dispatch(setInitToCheckbox())
            dispatch(setDateFrom(e))
            dispatch(usePutSlide({queryWhere: `${calendarToDate(e)}, ${calendarToDate(dateFrom1)}`, category}))
          }
        }}
        onChangeDateTo={e => {
          if(dateFrom1){
            dispatch(setInitToCheckbox())
            dispatch(setDateTo(e))
            dispatch(usePutSlide({queryWhere: `${calendarToDate(dateFrom)}, ${calendarToDate(e)}`, category}))
          }
        }}/>
      <div className="p-table position-absolute pe-3">
        <Table 
          titles={titles}
          dataSource={dataSource}/>
      </div>
      <div className="stats row w-100 position-absolute">
        <TitleValueLabel className="col-auto" title="Desayunos" value={`${breakfast}`} />
        <TitleValueLabel className="col-auto" title="Almuerzos" value={`${lunch}`} />
        <TitleValueLabel className="col-auto" title="Cenas" value={`${dinner}`} />
        <TitleValueLabel className="col-auto" title="Pagos" value={`${formatMoney(money)}`} />
        <TitleValueLabel className="col-auto" title="Subsidios" value={`${formatMoney(subsidy)}`} />
        <TitleValueLabel className="col-auto" title="Total" value={`${formatMoney(total)}`} />
      </div>


    </div>
  )
}