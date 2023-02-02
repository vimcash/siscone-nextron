import { Button } from "../../ui"

export const CalendarButton = ({title, onChangeValue, value, className}) => (
  <div className={className}>
    <input 
      type="date" 
      className="p-hide"
      onChange={e => onChangeValue(e.target.value)}
      value={value}/>
    <Button
      className="w-100"
      icon="calendar"
      title={`${title}`}
      left/>
  </div>
)