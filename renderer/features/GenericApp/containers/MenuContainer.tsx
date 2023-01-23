import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector, useReadConfig } from "../../../hooks";
import { Navbar } from "../../../layouts/Navbar";
import { selectCurrPage, setCurrPage } from "../../../states/globalState";
import { delayPage } from "../../../utils";
import { useGetYears, usePutSlide } from "../../CoreApp/hooks";
import { MenuFrame } from "../components";
import { useGetConfig } from "../hooks";

const MenuContainer = () => {
  const dispatch = useAppDispatch()
  const currPage = useAppSelector(selectCurrPage)
  const router = useRouter()
  delayPage()
  const toMenuPage = async (route:string) => {
    await dispatch(useReadConfig())
    if(currPage == "admin"){
      dispatch(usePutSlide({queryWhere:'', category: 'GENERAL'}))
      dispatch(useGetYears())
    }
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
        onClickRightButton={() => toConfigPage()}
        home/>
      <div id="home" className={`container-fluid d-none`}>
        <MenuFrame 
          onClickAdmin={() => {toMenuPage('admin')}}
          onClickUser={() => toMenuPage('user')}/> 
      </div>
    </>
  )
}

export default MenuContainer