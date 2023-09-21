import Interface from "./Interfaces"
import style from './style.module.css'

class Controller {
  static instance: Controller
  private style: string
  private text: string
  constructor() {
  }

  public static getInstance(props) {
    if(!this.instance)
      this.instance = new Controller()
    this.instance.refreshData(props)
    return this.instance
  }
  refreshData({className, isTitle, text, textCenter, isSub, capitalize }:Interface) {
    this.text = text
    this.style = `${style.container} ${className}`
    this.style = `${this.style} ${isTitle ? 'txt-title': ''}`.trim()
    this.style = `${this.style} ${textCenter ? 'txt-center': ''}`.trim()
    this.style = `${this.style} ${isSub ? 'txt-sub': ''}`.trim()
    this.style = `${this.style} ${capitalize ? 'txt-capitalize': ''}`.trim()
  } 

  public getStyle = () => this.style
  public getText = () => this.text
}

export default Controller