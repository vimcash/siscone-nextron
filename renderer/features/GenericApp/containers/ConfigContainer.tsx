import { useRouter } from "next/router"
import { useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { goBack } from "../../../utils"
import { ConfigFrame } from "../components"
import { 
  selectConfig
} from "../states/configState"

const ConfigContainer = () => {
  const router = useRouter()
  const { 
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
  } = useAppSelector(selectConfig)
  return (
    <>
      <Navbar 
        title="Configuracion"
        onClickRightButton={() => goBack(router)}/>
      <div 
        className="container-fluid">
          <ConfigFrame 
            companyName={companyName}
            breakfastTime={breakfastTime}
            lunchTime={lunchTime}
            lunchEnd={lunchEnd}
            dinnerTime={dinnerTime}
            dinnerEnd={dinnerEnd}
            breakfastPrice={breakfastPrice}
            breakfastSubsidy={breakfastSubsidy}
            lunchPrice={lunchPrice}
            lunchSubsidy={lunchSubsidy}
            dinnerPrice={dinnerPrice}
            dinnerSubsidy={dinnerSubsidy}
            codeSize={codeSize}/>
      </div>
    </>

  )
}

export default ConfigContainer