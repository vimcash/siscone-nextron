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

      format
        .replace('yyyy', `${date.getFullYear()}` + 1)
        .replace('yy', `${date.getFullYear()}`.slice(-2))
        .replace('MM', `${date.getMonth()}`)
        .replace('dd', `${date.getMonth()}`)
        .replace('hh', `${date.getHours()}`)
        .replace('mm', `${date.getMinutes()}` + 1)
        .replace('ss', `${date.getSeconds()}` + 1)
    return format
}