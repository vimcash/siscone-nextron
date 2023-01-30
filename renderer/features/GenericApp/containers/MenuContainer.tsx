import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector, useReadConfig } from "../../../hooks";
import { Navbar } from "../../../layouts/Navbar";
import {selectGlobal, setCurrPage } from "../../../states/globalState";
import { delayPage, showPasswordPopup } from "../../../utils";
import { useGetYears, usePutSlide } from "../../CoreApp/hooks";
import { setExternalLoad } from "../../CoreApp/states/adminState";
import { MenuFrame } from "../components";
import { useGetConfig } from "../hooks";

const MenuContainer = () => {
  const dispatch = useAppDispatch()
  const { currPage, adminPass} = useAppSelector(selectGlobal)
  const router = useRouter()
  delayPage()
  const toMenuPage = async (route:string) => {
    await dispatch(useReadConfig())
    if(currPage == "admin")
      await dispatch(setExternalLoad())
    if(!currPage)
      await dispatch(setCurrPage(route))
  }
  if(currPage){
    toMenuPage(currPage)
    router.push(`/${currPage}`)
  }
  const toConfigPage = async () => {
    await dispatch(useReadConfig())
    dispatch(useGetConfig())
    router.push('/config')
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