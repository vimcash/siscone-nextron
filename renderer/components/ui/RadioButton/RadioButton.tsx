import { getColumnByIndex } from "../../../utils"
import { cleanRadioButton } from "../../../utils/cleanRadioButton"

export const RadioButton = 
  ({className, name, options, onClick, value}) => {
    console.log(value)
    const setValueToRadio = () => {
      let count = 0
      let hasChecked = false
      options.map(option => {
        if(getColumnByIndex(value, count++)){
          document.getElementById(`${name}${option.value}`) ? document.getElementById(`${name}${option.value}`).click() : undefined
          hasChecked = true
        }
      })
      if(!hasChecked)
        cleanRadioButton(name)
    }
    setValueToRadio()
    return (options.map(
      option => (
        <div className={`p-0 ${className}`} key={option.value}>
          <input 
            type="radio" 
            className="btn-check" 
            name={name} 
            id={`${name}${option.value}`} 
            autoComplete="off" />
          <label 
            className="btn w-100" 
            htmlFor={`${name}${option.value}`}
            onClick={() => onClick(option.value)}>
              {option.title}
          </label>
        </div>
      ))
    )
}