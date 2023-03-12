import { InputLabel } from "../../../../components/form";
import { Button } from "../../../../components/ui";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { selectDbHost } from "../../../../states/globalState/globalState";
import { Config } from "../../data/interfaces";
import { usePostConfig } from "../../hooks";
import { useGetConfig } from "../../hooks/useGetConfig";
import { 
  setBreakfastPrice,
  setBreakfastSubsidy,
  setBreakfastTime,
  setCodeSize,
  setCompanyName,
  setDinnerEnd,
  setDinnerPrice,
  setDinnerSubsidy,
  setDinnerTime,
  setLunchEnd,
  setLunchPrice,
  setLunchSubsidy,
  setLunchTime
} from "../../states/configState";

export const ConfigFrame = ({
    companyName,
    breakfastTime,
    lunchTime,
    lunchEnd,
    dinnerTime,
    dinnerEnd,
    breakfastPrice,
    breakfastSubsidy,
    lunchPrice,
    lunchSubsidy,
    dinnerPrice,
    dinnerSubsidy,
    codeSize,
}:Config) => {
  const dispatch = useAppDispatch()
  const config = useAppSelector(selectDbHost)
  const inputs = [
    {title:"Compañia", value:companyName, action:(e => dispatch(setCompanyName(e.target.value))), type:"text"},
    {title:"Desayuno", value:breakfastTime, action:(e => dispatch(setBreakfastTime(e.target.value))), type:"time"},
    {title:"Almuerzo", value:lunchTime, action:(e => dispatch(setLunchTime(e.target.value))), type:"time"},
    {title:"Almuerzo Termino", value:lunchEnd, action:(e => dispatch(setLunchEnd(e.target.value))), type:"time"},
    {title:"Cena", value:dinnerTime, action:(e => dispatch(setDinnerTime(e.target.value))), type:"time"},
    {title:"Cena Termino", value:dinnerEnd, action:(e => dispatch(setDinnerEnd(e.target.value))), type:"time"},
    {title:"Precio Desayuno", value:breakfastPrice, action:(e => dispatch(setBreakfastPrice(e.target.value))), type:"number"},
    {title:"Subsidio Desayuno", value:breakfastSubsidy, action:(e => dispatch(setBreakfastSubsidy(e.target.value))), type:"number"},
    {title:"Precio Almuerzo", value:lunchPrice, action:(e => dispatch(setLunchPrice(e.target.value))), type:"number"},
    {title:"Subsidio Almuerzo", value:lunchSubsidy, action:(e => dispatch(setLunchSubsidy(e.target.value))), type:"number"},
    {title:"Precio Cena", value:dinnerPrice, action:(e => dispatch(setDinnerPrice(e.target.value))), type:"number"},
    {title:"Subsidio Cena", value:dinnerSubsidy, action:(e => dispatch(setDinnerSubsidy(e.target.value))), type:"number"},
    {title:"Size del Codigo", value:codeSize, action:(e => dispatch(setCodeSize(e.target.value))), type:"number"},
  ]
    return (
      <div className="mt-2">
        <div className="col-md-12 row m-0">
          {
            inputs.map(({title, value, action, type}:any) => (
              <div className="col-md-6" key={title}>
                <InputLabel 
                  title={title}
                  type={type}
                  value={value} 
                  onChangeValue={e => action(e)} />
              </div>
            ))
          }
          <label style={{color: "var(--bsp-bg-body)"}}>{config}</label>
        </div>
        <div className="position-fixed pps-rb">
          <Button icon="save" className="ppr-1 me-1" primary onClick={() => {
            dispatch(usePostConfig({
              companyName, 
              breakfastTime, 
              lunchTime, 
              lunchEnd, 
              dinnerTime, 
              dinnerEnd,
              breakfastPrice,
              breakfastSubsidy,
              lunchPrice,
              lunchSubsidy,
              dinnerPrice,
              dinnerSubsidy, 
              codeSize
            }))
            dispatch(useGetConfig())
          }}/>
          <Button icon="cancel" className="ppr-1" onClick={() => dispatch(useGetConfig())}/>
        </div>
      </div>
    )
  }