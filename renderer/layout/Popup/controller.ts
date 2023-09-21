import { hidePopup } from "./state"

let dispatch
class Controller {
  static instance: Controller
  private state: any

  constructor(inDispatch:any) {
    dispatch = inDispatch
  }

  public static getInstance(inDispatch, state) {
    if(!this.instance)
      this.instance = new Controller(inDispatch)
    this.instance.refresh(state)
    return this.instance
  }

  refresh(state) {
    this.state = state
  }

  public getPopupType = () => this.state.popupType
  public hidePopup = () => dispatch(hidePopup())
}

export default Controller