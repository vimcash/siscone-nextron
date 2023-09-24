import { setToggle } from "./state"

let dispatch
class Controller {
  static instance: Controller
  private state: any
  private currPage: any

  private router: any

  constructor(inDispatch:any, router) {
    dispatch = inDispatch
    this.router = router
  }

  public static getInstance(inDispatch, router, state) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router)
    this.instance.refresh(state)
    console.log(router.pathname)
    this.instance.currPage = router.pathname
    return this.instance
  }

  refresh(state) {
    this.state = state
  }

  public getToogle = () => this.state.toogleMenu
  public getCurrPage = () => this.currPage
  public redirect = (route:string) => this.router.push(route)
  public toogleMenu() {
    dispatch(setToggle())
  }
}

export default Controller