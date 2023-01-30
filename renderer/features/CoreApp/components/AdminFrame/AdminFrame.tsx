import { RadioButton, ComboBox, Table, TitleValueLabel, Button, Spinner, AdminFilterPad } from "../../../../components/ui"
import { useAppDispatch} from "../../../../hooks"
import { exportCSV, formatMoney, getColumnByIndex, getWhereByCase, isNumber, reportGenerator } from "../../../../utils"
import { cleanRadioButton } from "../../../../utils/cleanRadioButton"
import { useGetYears, usePutSlide } from "../../hooks"
import { setByMonth, setByYear, setTemporality } from "../../states/adminState"
import { setCategory } from "../../states/adminState/adminState"

export const AdminFrame = ({ admin }) => {
  const {
    listButtons,
    months,
    findByMonth,
    years,
    findByYear,
    titles,
    dataSource,
    categories,
    category,
    externalLoad,
  } = admin
  const dispatch = useAppDispatch()
  if (externalLoad){
    dispatch(usePutSlide({queryWhere:'', category: 'GENERAL'}))
    dispatch(useGetYears())
    return (
      <Spinner />
    )
  }
  const initialValue = 0;
  const totalPrice = dataSource.reduce((acumulator, currentVal) => acumulator + Number(currentVal.PRICE),initialValue)
  const totalSubsidy = dataSource.reduce((acumulator, currentVal) => acumulator + Number(currentVal.SUBSIDY),initialValue)
  const onChangeComboBox = (inValue:string) => {
    if(!isNumber(inValue)){
      dispatch(setCategory(inValue))
      const category = inValue
      dispatch(usePutSlide({category}))
      return 
    }
    cleanRadioButton("temp")
    inValue.length == 4 ? dispatch(setByYear(inValue)) : dispatch(setByMonth(inValue))
    const queryWhere = getWhereByCase(inValue)
    dispatch(usePutSlide({queryWhere, category}))
  }
  return (
    <div className="mt-2">
      <AdminFilterPad 
        radioOptions={listButtons}
        onClickRadio={e => {
          dispatch(setTemporality(e))
          dispatch(usePutSlide({queryWhere: getWhereByCase(e), category}))}}
        onChangeComboBox={e => onChangeComboBox(e)}
        months={months}
        years={years}
        categories={categories}
        selectedMonth={findByMonth}
        selectedYear={findByYear}
        selectedCategory={category}
        onClickPrint={() => reportGenerator(titles, dataSource, ['Total', `${dataSource.length}`, `${formatMoney(totalPrice)}`, `${formatMoney(totalSubsidy)}`, `${formatMoney(totalPrice + totalSubsidy)}`])}
        onClickReport={() => () => exportCSV(titles, dataSource, `Total:,${dataSource.length},${formatMoney(totalPrice)},${formatMoney(totalSubsidy)},${formatMoney(totalPrice + totalSubsidy)}`)}/>
      <div className="p-table position-absolute pe-3">
        <Table 
          titles={titles}
          dataSource={dataSource}/>
      </div>
      <div className="stats row w-100 position-absolute">
        <TitleValueLabel className="col-auto" title="Desayunos" value={`${dataSource.filter(slide => getColumnByIndex(slide, 1) == "DESAYUNO").length}`} />
        <TitleValueLabel className="col-auto" title="Almuerzos" value={`${dataSource.filter(slide => getColumnByIndex(slide, 1) == "ALMUERZO").length}`} />
        <TitleValueLabel className="col-auto" title="Cenas" value={`${dataSource.filter(slide => getColumnByIndex(slide, 1) == "CENA").length}`} />
        <TitleValueLabel className="col-auto" title="Pagos" value={`${formatMoney(totalPrice)}`} />
        <TitleValueLabel className="col-auto" title="Subsidios" value={`${formatMoney(totalSubsidy)}`} />
        <TitleValueLabel className="col-auto" title="Total" value={`${formatMoney(totalPrice + totalSubsidy)}`} />
      </div>


    </div>
  )
}