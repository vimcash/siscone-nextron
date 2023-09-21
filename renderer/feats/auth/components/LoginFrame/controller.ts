import { setUsername, setPassword } from "../../state/loginState"

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private state:any

  constructor(inDispatch:any, router:any) {
    dispatch = inDispatch
    this.router = router
  }

  public static getInstance(inDispatch:any, isLogin:any, router:any, state:any) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router)

    this.instance.refreshData(isLogin, state)
    return this.instance
  }

  private refreshData(isLogin, state) {
    // if(!isLogin)
    //   this.router.push("/auth/login")
    this.state = state
  }

  public setUsername = (e) => dispatch(setUsername(e))
  public setPassword = (e) => dispatch(setPassword(e))
  public getUsername = () => this.state.username
  public getPassword = () => this.state.password
}

export default Controller