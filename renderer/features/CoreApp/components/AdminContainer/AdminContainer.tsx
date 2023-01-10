import { RadioButton, ComboBox, Table, TitleValueLabel } from "../../../../components/ui"
import { useAppDispatch, useAppSelector } from "../../../../hooks"
import { getColumnByIndex, getWhereByCase } from "../../../../utils"
import { cleanRadioButton } from "../../../../utils/cleanRadioButton"
import { usePutSlide } from "../../hooks"
import { selectDataSource, selectFindByMonth, selectFindByYear, selectListButtons, selectMonths, selectTitles, selectYears, setByMonth, setByYear, setTemporality } from "../../states/adminState"
export const AdminContainer = () => {
  const dispatch = useAppDispatch()
  const titles = useAppSelector(selectTitles)
  const buttons = useAppSelector(selectListButtons)
  const months = useAppSelector(selectMonths)
  const dataSource = useAppSelector(selectDataSource)
  const years = useAppSelector(selectYears)
  const findByYear = useAppSelector(selectFindByYear)
  const findByMonth = useAppSelector(selectFindByMonth)
  const onChangeComboBox = (inValue:string) => {
    cleanRadioButton("temp")
    inValue.length == 4 ? dispatch(setByYear(inValue)) : dispatch(setByMonth(inValue))
    dispatch(usePutSlide(getWhereByCase(inValue)))
  }
  return (
    <div className="mt-2">
      <div className="row pe-2 ps-2">
        <RadioButton 
          className="mb-1 me-1 col-sm-auto checkbox"
          onClick={e => {
            dispatch(setTemporality(e))
            dispatch(usePutSlide(getWhereByCase(e)))
          }}
          options={buttons} 
          name="temp"/>
        <ComboBox 
          className="col-sm-auto mb-1 me-1" 
          inOptions={months}
          onChange={e => onChangeComboBox(e.target.value)}
          value={findByMonth}/>
        <ComboBox 
          className="col-sm-1 mb-1 me-1" 
          inOptions={years}
          onChange={e => onChangeComboBox(e.target.value)}
          value={findByYear}/>
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