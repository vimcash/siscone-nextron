import { useRouter } from "next/router"
import { useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { goBack } from "../../../utils"
import { SlideFrame } from "../components"
import { selectCurrentCode, selectLastCode } from "../states/slideState"

const SlideContainer = () => {
  const router = useRouter()
  const lastCode = useAppSelector(selectLastCode)
  const currentCode = useAppSelector(selectCurrentCode)
  return (
    <>
      <Navbar 
        title="CardSlide"
        onClickRightButton={() => goBack(router)}/>
      <div className="container-fluid">
        <SlideFrame 
          lastCode={lastCode}
          currentCode={currentCode}/>
      </div>
    </>
  )
}

export default SlideContainer