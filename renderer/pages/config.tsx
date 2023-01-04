import { ConfigContainer } from "../features/GenericApp/components"
import { useAppDispatch } from "../hooks"
import { setCurrPage } from "../states/globalState"

export const Config = () => {
  const dispatch = useAppDispatch()
  dispatch(setCurrPage('config'))
  return <ConfigContainer />
}


export default Config