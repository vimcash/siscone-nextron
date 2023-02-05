import { TitleValueLabel } from "../../../../components/ui";
import { getNameByRowType } from "../../../../utils";

export const RowDisplayLabels = ({rowType, countValue, totalPrice, totalSubsidy, total,fontSize=2}) => (
  <>
    {rowType == 'total'? <div className="mt-1 mb-1 m-0 ps-4 pe-4"><hr /></div> : <></>}
    <TitleValueLabel 
      title={rowType != 'total' ? getNameByRowType(rowType) : 'Cant. Total'}
      value={countValue}
      className={`col-md-2`}
      fontSize={fontSize+1}/>      
    <TitleValueLabel 
      title={rowType != 'total' ? `DOP. ${getNameByRowType(rowType)}`: 'Total DOP Empleado'}
      value={totalPrice}
      className={`col-md-3`}
      fontSize={fontSize+1}/>
    <TitleValueLabel 
      title={rowType != 'total' ? `Sub. ${getNameByRowType(rowType)}`: 'Total DOP Subsidio'}
      value={totalSubsidy}
      className={`col-md-3`}
      fontSize={fontSize+1}/>
    <TitleValueLabel 
      title={rowType != 'total' ? `Total en ${getNameByRowType(rowType)}`: 'Total'}
      value={total}
      className={`col-md-4`}
      fontSize={fontSize+1}/>
  </>
)