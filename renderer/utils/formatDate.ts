import { isDate } from "./isDate"

export const formatDate = 
  (date:Date, format:string) => {
    if(isDate(date))
      return format
        .replace('yyyy', `${date}`.slice(0, 4))
        .replace('sss', `${date}`.slice(20, 23))
        .replace('MM', `${date}`.slice(5, 7))
        .replace('dd', `${date}`.slice(8, 10))
        .replace('hh', `${date}`.slice(11, 13))
        .replace('mm', `${date}`.slice(14, 16))
        .replace('ss', `${date}`.slice(17, 19))
    return format
      .replace('yyyy', `${date.getFullYear()}`)
      .replace('yy', `${date.getFullYear()}`.slice(-2))
      .replace('MM', `${date.getMonth()+1}`.padStart(2,'0'))
      .replace('dd', `${date.getDate()}`.padStart(2,'0'))
      .replace('hh', `${date.getHours()}`.padStart(2,'0'))
      .replace('mm', `${date.getMinutes()}`.padStart(2,'0'))
      .replace('ss', `${date.getSeconds()}`.padStart(2,'0'))
}