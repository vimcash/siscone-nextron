import { InputLabel } from "../../../../components/form";
import { Button } from "../../../../components/ui/Button";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { useGetConfig } from "../../hooks/useGetConfig";
import { 
  selectBreakfastTime, 
  selectCodeSize, 
  selectCompanyName, 
  selectDinnerTime, 
  selectLunchTime, 
  setBreakfastTime,
  setCodeSize,
  setCompanyName,
  setDinnerTime,
  setLunchTime
} from "../../states/configState";

export const ConfigContainer = () => {
  const dispatch = useAppDispatch()
  const companyName = useAppSelector(selectCompanyName)
  const breakfastTime = useAppSelector(selectBreakfastTime)
  const lunchTime = useAppSelector(selectLunchTime)
  const dinnerTime = useAppSelector(selectDinnerTime)
  const codeSize = useAppSelector(selectCodeSize)
  return (
    <div className="mt-2">
      <div className="col-md-5">
        <InputLabel 
          title="Compañia" 
          value={companyName}
          onChangeValue={e => dispatch(setCompanyName(e.target.value))} />
        <InputLabel 
          title="Desayuno" 
          type="time" 
          value={breakfastTime} 
          onChangeValue={e => dispatch(setBreakfastTime(e.target.value))} />
        <InputLabel 
          title="Almuerzo" 
          type="time" 
          value={lunchTime} 
          onChangeValue={e => dispatch(setLunchTime(e.target.value))} />
        <InputLabel 
          title="Cena" 
          type="time" 
          value={dinnerTime} 
          onChangeValue={e => dispatch(setDinnerTime(e.target.value))} />
        <InputLabel 
          title="Size del Codigo" 
          type="number" 
          value={codeSize} 
          onChangeValue={e => dispatch(setCodeSize(e.target.value))} />
      </div>
      <div className="position-absolute pps-rb">
        <Button icon="save" className="ppr-1 me-1" primary/>
        <Button icon="cancel" className="ppr-1" onClick={() => dispatch(useGetConfig())}/>
      </div>
    </div>
  )
}