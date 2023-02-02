import { isNumber } from "./isNumber"

export const getWhereByCase = (inParam:string) => {
  const date = new Date()
  //By Category
  switch(inParam){
    case 'Year':
      return `'01.01.${date.getFullYear()}', '31.12.${date.getFullYear()}'`
    case 'Month':
      if(date.getMonth() == 11)
        return `'01.${String(date.getMonth()+1).padStart(2,'0')}.${date.getFullYear()}', '01.01.${date.getFullYear()+1}'`
      return `'01.${String(date.getMonth()+1).padStart(2,'0')}.${date.getFullYear()}', '01.${String(date.getMonth()+2).padStart(2,'0')}.${date.getFullYear()}'`
    case 'Day':
      const today = `'${String(date.getDate()).padStart(2,'0')}.${String(date.getMonth()+1).padStart(2,'0')}.${date.getFullYear()}'`
      return `${today}, ${today}` 
  }
  if(!isNumber(inParam))
    return ""
  const intParam = Number(inParam)
  //By Month
  if(intParam > 0 && intParam <= 12)
    return intParam == 12 ? 
      `'01.${String(intParam).padStart(2,'0')}.${date.getFullYear()}', '01.01.${date.getFullYear()+1}'`
      :
      `'01.${String(intParam).padStart(2,'0')}.${date.getFullYear()}', '01.${String(intParam+1).padStart(2,'0')}.${date.getFullYear()}'`
  //By Year
  if(intParam > 2019) {
    return `'01.01.${intParam}', '31.12.${intParam}'`
  }
}