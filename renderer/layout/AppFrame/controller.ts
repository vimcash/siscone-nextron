let dispatch
class Controller {
  private static instance:Controller
  private router
  private appReady
  private inLogin

  constructor(inDispatch, router){
    dispatch = inDispatch
    this.router = router
  }

  public static getInstance(inDispatch, state, router) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router)
    this.instance.refreshData(state, router)
    return this.instance
  }

  private refreshData(state, router){
    this.inLogin = router.pathname == "/auth/login"
    this.router = router
    this.appReady = state
  }

  public getRouter = () => this.router
  public getAppReady = () => this.appReady
  public getInLogin = () => this.inLogin
  public getDispatch = () => dispatch
}

export default Controller