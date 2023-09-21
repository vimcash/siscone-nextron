import localStyle from './style.module.css'

class Controller {
  static instance: Controller
  private style: string
  private icon: any
  private onClick: any
  private isHeaderIcon: boolean
  private title: string
  private iconSize: number
  constructor() {
  }

  public static getInstance(props) {
    if(!this.instance)
      this.instance = new Controller()
    this.instance.refreshData(props)
    return this.instance
  }
  refreshData({className, icon, iconSize, title, headerIcon, primary, primarySelected, onClick
  }) {
      this.isHeaderIcon = headerIcon || icon 
      this.icon = icon   
      this.onClick = onClick
      this.iconSize = iconSize
      this.title = title
      this.style = `${className} ${localStyle.container} `
      this.style = `${this.style} ${icon && !title ? localStyle.iconButton : ''}`.trim()
      this.style = `${this.style} ${title ? localStyle.textButton : ''}`.trim()
      this.style = `${this.style} ${headerIcon ? localStyle.headerIcon : ''}`.trim()
      this.style = `${this.style} ${primary && !primarySelected ? localStyle.primary : ''}`.trim()
      this.style = `${this.style} ${primarySelected ? localStyle.primarySelected : ''}`.trim()
  } 

  public getStyle = () => this.style
  public getIcon = () => this.icon
  public getIconSize = () => this.iconSize
  public getTitle = () => this.title
  public getOnClick = () => this.onClick
  public getIsHeaderIcon= () => this.isHeaderIcon
}

export default Controller