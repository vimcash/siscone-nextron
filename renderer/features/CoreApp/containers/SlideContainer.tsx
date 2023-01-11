import { useAppSelector } from "../../../hooks"
import { Navbar } from "../../../layouts/Navbar"
import { selectCurrPage } from "../../../states/globalState"
import { SlideFrame } from "../components"
import { selectCurrentCode, selectLastCode } from "../states/slideState"

const SlideContainer = () => {
  const lastCode = useAppSelector(selectLastCode)
  const currentCode = useAppSelector(selectCurrentCode)
  return (
    <>
      <Navbar 
        title="CardSlide"/>
      <hr />
      <div className="container-fluid">
        <SlideFrame 
          lastCode={lastCode}
          currentCode={currentCode}/>
      </div>
    </>
  )
}

export default SlideContainer