import { useRouter } from "next/router";
import { setDelay } from "./setDelay";
import { setLocalStorage } from "./setLocalStorage"

export const goBack = async (router) => {
  setLocalStorage( "")
  router.push('/home')
}