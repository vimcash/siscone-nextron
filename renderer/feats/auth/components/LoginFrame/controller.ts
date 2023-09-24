import { usePostLogin } from "../../hooks"
import { useGetCurrUser } from "../../hooks/useGetCurrUser"
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
  public login = () => 
    this.state.username != '' && this.state.password != '' ? dispatch(usePostLogin(this.state)) : console.log('vacio mi patro')
  public checkCurrUser = () => dispatch(useGetCurrUser())
  public getUsername = () => this.state.username
  public getPassword = () => this.state.password
}

export default Controller