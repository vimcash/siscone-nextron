import { RadioButton, ComboBox, Table, TitleValueLabel, Button } from "../../../../components/ui"
import { useAppDispatch, useAppSelector } from "../../../../hooks"
import { exportCSV, getColumnByIndex, getWhereByCase, isNumber, reportGenerator } from "../../../../utils"
import { cleanRadioButton } from "../../../../utils/cleanRadioButton"
import { usePutSlide } from "../../hooks"
import { setByMonth, setByYear, setTemporality } from "../../states/adminState"
import { setCategory } from "../../states/adminState/adminState"

export const AdminFrame = ({
  buttons,
  months,
  findByMonth,
  years,
  findByYear,
  titles,
  dataSource,
  categories,
  category
}) => {
  const dispatch = useAppDispatch()
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
      <div className="row pe-2 ps-2">
        <RadioButton 
          className="mb-1 me-1 col-sm-auto checkbox"
          onClick={e => {
            dispatch(setTemporality(e))
            dispatch(usePutSlide({queryWhere: getWhereByCase(e), category}))
          }}
          options={buttons} 
          name="temp"/>
        <ComboBox 
          className="col-sm-auto mb-1 me-1" 
          inOptions={months}
          onChange={e => onChangeComboBox(e.target.value)}
          value={findByMonth}/>
        <ComboBox 
          className="col-sm-auto mb-1 me-1" 
          inOptions={years}
          onChange={e => onChangeComboBox(e.target.value)}
          value={findByYear}/>
        <ComboBox 
          className="col-sm-auto mb-1 me-1" 
          inOptions={categories}
          onChange={e => onChangeComboBox(e.target.value)}
          value={category}/>
        <Button
          className="col-sm-auto mb-1 me-1"
          icon="report"
          title="Imprimir"
          left primary
          onClick={() => reportGenerator(titles, dataSource, ['Total', `${dataSource.length}`, `${totalPrice}`, `${totalSubsidy}`, `${(totalPrice + totalSubsidy).toFixed(2)}`])}/>
          <Button
            className="col-sm-auto mb-1 me-1"
            icon="excel"
            title="Exportar"
            left primary
            onClick={() => exportCSV(titles, dataSource, `Total:,${dataSource.length},${totalPrice},${totalSubsidy},${(totalPrice + totalSubsidy).toFixed(2)}`)}/>
      </div>
      <div className="p-table position-absolute pe-3">
        <Table 
          titles={titles}
          dataSource={dataSource}/>
      </div>
      <div className="stats row w-100 position-absolute">
        <TitleValueLabel className="col-4" title="Desayunos" value={`${dataSource.filter(slide => getColumnByIndex(slide, 1) == "DESAYUNO").length}`} />
        <TitleValueLabel className="col-4" title="Almuerzos" value={`${dataSource.filter(slide => getColumnByIndex(slide, 1) == "ALMUERZO").length}`} />
        <TitleValueLabel className="col-4" title="Cenas" value={`${dataSource.filter(slide => getColumnByIndex(slide, 1) == "CENA").length}`} />
      </div>


    </div>
  )
}