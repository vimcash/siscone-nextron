import { useRouter } from "next/router";
import { useGetYears, usePutSlide } from "../features/CoreApp/hooks"
import { setLocalStorage } from "./setLocalStorage"

export const toMenuPage = async (route:string, dispatch:any) => {
  const router = useRouter();
  if(route == "admin"){
    dispatch(usePutSlide(''))
    dispatch(useGetYears())
  }
  
  setLocalStorage('currPage', route)
  router.push(`/${route}`)
}