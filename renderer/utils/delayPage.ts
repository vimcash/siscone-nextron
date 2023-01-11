import { setDelay } from "./setDelay"
let firstRun
export const delayPage = async () => {
  if(typeof window === 'undefined')
    return 
  if(firstRun)
    await setDelay(.2)
  const menu = document.getElementById("home")
  if(!firstRun){
    await setDelay(1)
    firstRun = true
  }
  menu ? menu.classList.remove("d-none") : undefined
}