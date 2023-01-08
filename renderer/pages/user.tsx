import { SlideFrame } from "../features/CoreApp/components"
import { useAppDispatch } from "../hooks"
import { setCurrPage } from "../states/globalState"

export const User = () => {
  const dispatch = useAppDispatch()
  dispatch(setCurrPage('user'))
  return <SlideFrame />
}

export default User