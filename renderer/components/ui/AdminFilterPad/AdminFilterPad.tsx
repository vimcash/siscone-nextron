import { Button, ComboBox, RadioButton } from ".."

export const AdminFilterPad = ({ 
  onClickRadio, 
  radioOptions, 
  onChangeComboBox, 
  months, 
  years,
  categories,
  selectedMonth, 
  selectedYear,
  selectedCategory, 
  onClickPrint,
  onClickReport,
}) => {
  return (
    <div className="row pe-2 ps-2">
      <RadioButton 
        className="mb-1 me-1 col-sm-auto checkbox"
        onClick={e => onClickRadio(e)}
        options={radioOptions} 
        name="temp"/>
      <ComboBox 
        className="col-sm-auto mb-1 me-1" 
        inOptions={months}
        onChange={e => onChangeComboBox(e.target.value)}
        value={selectedMonth}/>
      <ComboBox 
        className="col-sm-auto mb-1 me-1" 
        inOptions={years}
        onChange={e => onChangeComboBox(e.target.value)}
        value={selectedYear}/>
      <ComboBox 
        className="col-sm-auto mb-1 me-1" 
        inOptions={categories}
        onChange={e => onChangeComboBox(e.target.value)}
        value={selectedCategory}/>
      <Button
        className="col-sm-auto mb-1 me-1"
        icon="report"
        title="Imprimir"
        left primary
        onClick={() => onClickPrint()}/>
      <Button
        className="col-sm-auto mb-1 me-1"
        icon="excel"
        title="Exportar"
        left primary
        onClick={() => onClickReport()}/>
    </div>
  )
}