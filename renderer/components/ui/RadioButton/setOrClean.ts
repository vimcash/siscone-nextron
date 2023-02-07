import { getColumnByIndex } from "../../../utils"
import { cleanRadioButton } from "./cleanRadioButton"

export const setOrClean = (radioName, options, values) => {
  let count = 0
  let hasChecked = false
  options.map(option => {
    if(getColumnByIndex(values, count++)){
      try{
        document.getElementById(`${radioName}${option.value}`) ? document.getElementById(`${radioName}${option.value}`).click() : undefined
      }
      catch {}
      hasChecked = true
    }
  })
  if(!hasChecked)
    cleanRadioButton(radioName)
}