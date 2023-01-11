import { useAppDispatch } from "../hooks";
import { setCurrPage } from "../states/globalState";

export const goBack = async (router) => {
  const dispatch = useAppDispatch()
  dispatch(setCurrPage(""))
  router.push('/home')
}