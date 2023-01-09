import { useAppDispatch } from "../hooks"

let dispatch
const loadDispatch = () => {
  if(!dispatch){
    dispatch = useAppDispatch()
  }
}
export const getDispatch = () => {
  loadDispatch()
  return dispatch
}
export const returnDistpatch = () => {

}