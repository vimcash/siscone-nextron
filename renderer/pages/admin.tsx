import { AdminContainer } from "../features/CoreApp/components"
import { setCurrPage } from "../states/globalState"
import { getDispatch } from "../utils/returnDistpatch"

export const admin = () => {
  const dispatch = getDispatch()
  dispatch(setCurrPage('admin'))
  return <AdminContainer />
}

export default admin