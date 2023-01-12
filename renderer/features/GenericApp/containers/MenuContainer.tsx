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

  const toMenuPage = (route:string) => {
    if(route == "admin"){
      dispatch(usePutSlide(''))
      dispatch(useGetYears())
    }
    if(currPage == "")
      dispatch(setCurrPage(route))
    router.push(`/${route}`)
  }
  if(currPage){
    toMenuPage(currPage)
  }
  const toConfigPage = () => {
    dispatch(useGetConfig())
    router.push('/config')
  }
  dispatch(useReadConfig())
  return (
    <>
      <Navbar 
        title="Menu"
        onClickRightButton={() => toConfigPage()}
        home/>
      <hr />
      <div id="home" className={`container-fluid d-none`}>
        <MenuFrame 
          onClickAdmin={() => toMenuPage('admin')}
          onClickUser={() => toMenuPage('user')}/> 
      </div>
    </>
  )
}

export default MenuContainer