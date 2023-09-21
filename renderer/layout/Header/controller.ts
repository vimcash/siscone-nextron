import { setToggle } from "../LeftMenu/state"

let dispatch
class Controller {
  static instance: Controller
  private state: any

  constructor(inDispatch:any) {
    dispatch = inDispatch
  }

  public static getInstance(inDispatch) {
    if(!this.instance)
      this.instance = new Controller(inDispatch)
    return this.instance
  }

  public toogleMenu() {
    dispatch(setToggle())
  }

}

export default Controller