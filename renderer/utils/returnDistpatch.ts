import { useAppDispatch } from "../hooks"

let dispatch
const loadDispatch = () => {
  if(!dispatch){
    console.log("Loaded")
    dispatch = useAppDispatch()
  }
}
export const getDispatch = () => {
  loadDispatch()
  return dispatch
}
export const returnDistpatch = () => {

}