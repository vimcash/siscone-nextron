import { useRouter } from "next/router";
import { Spinner } from "../../../components/ui";
import { getDbHost } from "../../../data";
import { useAppDispatch, useAppSelector, useReadConfig } from "../../../hooks";
import { Navbar } from "../../../layouts/Navbar";
import { selectGlobal } from "../../../states/globalState";
import { delayPage, showPasswordPopup } from "../../../utils";
import { setExternalLoad } from "../../CoreApp/states/adminState";
import { MenuFrame } from "../components";
import { useGetConfig } from "../hooks";

const MenuContainer = () => {
  const dispatch = useAppDispatch()
  const { currPage, adminPass } = useAppSelector(selectGlobal)
  const router = useRouter()
  if(!getDbHost()){
    dispatch(useReadConfig())
  }
  delayPage()
  const autoRedirect = async () => {
    if(!currPage)
      return
    if(currPage == 'admin')
      await dispatch(setExternalLoad())
    router.push(currPage)
  }
  autoRedirect()
  dispatch(useReadConfig())
  const toConfigPage = async () => {
    await dispatch(useReadConfig())
    dispatch(useGetConfig())
    router.push('/config')
  }
  const toMenuPage = async (route:string) => {
    route == 'admin' ? await dispatch(setExternalLoad()) : undefined
    router.push(route)
  }
  return (
    <>
      <Navbar 
        title="Menu"
        onClickRightButton={() => showPasswordPopup('Clave de Acceso', adminPass, () => toConfigPage())}
        home/>
      <div id="home" className={`container-fluid d-none`}>
        <MenuFrame 
          onClickAdmin={() => showPasswordPopup('Clave de Acceso', adminPass, () => toMenuPage('admin'))}
          onClickUser={() => toMenuPage('user')}/> 
      </div>
    </>
  )
}

export default MenuContainer