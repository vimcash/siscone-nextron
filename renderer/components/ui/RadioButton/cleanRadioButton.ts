export const cleanRadioButton = (name:string) => {
  const RadioButtons = document.getElementsByName(`${name}`)
  RadioButtons.forEach((checkButton:any) => checkButton.checked=false )
}