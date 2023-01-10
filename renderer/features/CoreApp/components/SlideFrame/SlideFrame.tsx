import { InputIcon } from "../../../../components/form"
import { useAppDispatch, useAppSelector } from "../../../../hooks"
import { getDispatch } from "../../../../utils/returnDistpatch"
import { usePostSlide } from "../../hooks"
import { selectCurrentCode, selectLastCode, setCurrentCode } from "../../states/slideState"

export const SlideFrame = () => {
  const distpatch = getDispatch()
  const lastCode = useAppSelector(selectLastCode)
  const currentCode = useAppSelector(selectCurrentCode)

  return (
    <div className="position-absolute top-50 start-50 translate-middle responsive-3 p-3">
      <div className="tx-center w-100">
        <label className="h3">Escanea el codigo</label>
        <InputIcon 
          value={currentCode}
          onPressEnter={() => {
            distpatch(usePostSlide(currentCode))
          }}
          icon="card"
          onChangeValue={e => distpatch(setCurrentCode(e.target.value))} />
      </div>
      <div className="w-100">
        <label 
          className="text-light">
            {`Anterior: ${lastCode}`}
        </label>
      </div>
    </div>
  )
}
export default SlideFrame