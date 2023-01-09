import { RadioButton, ComboBox, Table } from "../../../../components/ui"
import { useAppDispatch, useAppSelector } from "../../../../hooks"
import { useGetSlide } from "../../hooks"
import { selectDataSource, selectFindByMonth, selectFindByYear, selectListButtons, selectMonths, selectTitles, selectYears } from "../../states/adminState"
export const AdminContainer = () => {
  const dispatch = useAppDispatch()
  const titles = useAppSelector(selectTitles)
  const buttons = useAppSelector(selectListButtons)
  const months = useAppSelector(selectMonths)
  const dataSource = useAppSelector(selectDataSource)
  const years = useAppSelector(selectYears)
  const findByYeard = useAppSelector(selectFindByYear)
  const findByMonth = useAppSelector(selectFindByMonth)
  const cleanCheckbutton = () => {
    const CheckButtons = document.getElementsByName("options")
    CheckButtons.forEach((checkButton:any) => checkButton.checked=false )
  }
  const onClickRadioButton = (inValue) => {
    dispatch(useGetSlide())
  }
  return (
    <div className="mt-2">
      <div className="row pe-2 ps-2">
        <RadioButton 
          className="mb-1 me-1 col-sm-auto checkbox"
          onClick={e => console.log(e)}
          options={buttons} 
          name="Temp"/>
        <ComboBox 
          className="col-sm-auto mb-1 me-1" 
          inOptions={months}
          onChange={e => console.log(e.target.value)}
          value={findByYeard}/>
        <ComboBox 
          className="col-sm-1 mb-1 me-1" 
          inOptions={years}
          onChange={e => console.log(e.target.value)}
          value={findByMonth}/>
      </div>
      <Table 
        titles={titles}
        dataSource={dataSource}/>
    </div>
  )
}