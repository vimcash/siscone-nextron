import style from './style.module.css'
import product from '../../assets/imgs/3dBox94.png'
import invoice from '../../assets/imgs/3dShoppingCar94.png'
import accounting from '../../assets/imgs/3dAccounting94.png'
import contacts from '../../assets/imgs/3dContacts94.png'
import folder from '../../assets/imgs/3dFolder94.png'
let dispatch
class Controller {
  static instance: Controller
  public style = style
  types = [
    {name: "product", color: style.product, img: product},
    {name: "invoice", color: style.invoice, img: invoice},
    {name: "accounting", color: style.accounting, img: accounting},
    {name: "contacts", color: style.contacts, img: contacts},
    {name: "category", color: style.product, img: folder}
  ]
  constructor() {
  }

  public static getInstance() {
    if(!this.instance)
      this.instance = new Controller()
    return this.instance
  }

  public getTypeByName = (name: string) => this.types.find(type => type.name == name)
}

export default Controller.getInstance()