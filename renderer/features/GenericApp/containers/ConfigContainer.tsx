import { useRouter } from "next/router"
import { useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { goBack, setLocalStorage } from "../../../utils"
import { ConfigFrame } from "../components"
import { 
  selectCompanyName, 
  selectBreakfastTime, 
  selectLunchTime, 
  selectDinnerTime, 
  selectCodeSize 
} from "../states/configState"

const ConfigContainer = () => {
  const router = useRouter()
  const companyName = useAppSelector(selectCompanyName)
  const breakfastTime = useAppSelector(selectBreakfastTime)
  const lunchTime = useAppSelector(selectLunchTime)
  const dinnerTime = useAppSelector(selectDinnerTime)
  const codeSize = useAppSelector(selectCodeSize)
  return (
    <>
      <Navbar 
        title="Configuracion"
        onClickRightButton={() => goBack(router)}/>
      <hr />
      <div 
        className="container-fluid">
          <ConfigFrame 
            companyName={companyName}
            breakfastTime={breakfastTime}
            lunchTime={lunchTime}
            dinnerTime={dinnerTime}
            codeSize={codeSize}/>
      </div>
    </>

  )
}

export default ConfigContainer