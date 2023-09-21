import { formatDate, getColumnByIndex as columByIndex, isDate } from "../../utils"
import { Button } from "../Button"
import { Check } from "../Check"
import { Div } from "../Div"
import { Input } from "../Input"
import { Label } from "../Label"
import style from './style.module.css'
export const  Table = ({titles, dataSource, joinCategory, className}:any) => {
  let row = 0
  return (
    <Div className={`${style.container} ${className}`}>
      <table className={style.table}>
        <thead>
          <tr>
            <th style={{width: "1px"}}/>
            {
              titles.map(title => (
                <th scope="col" key={title}>{title}</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            dataSource.map(
              object => {
                let column = 0
                return <tr key={row++}>
                  <td><Check /></td>
                {
                  titles.map(() => (
                    <td scope="row" key={column}>{joinCategory && column == 0 ? <Div>
                      <Label text={columByIndex(object, column++)} />
                      <Label text={columByIndex(object, column++)} isSub/>
                    </Div> : isDate(columByIndex(object, column))? formatDate(columByIndex(object, column++), "dd/MM/yyyy hh:mm") : columByIndex(object, column++)}</td>
                  ))
                }
                </tr>
              }
            )
          }
        </tbody>
      </table>
    </Div>
  )
}