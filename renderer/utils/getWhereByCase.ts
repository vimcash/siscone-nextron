import { isNumber } from "./isNumber"

export const getWhereByCase = (inParam:string) => {
  const date = new Date()
  //By Category
  switch(inParam){
    case 'Year':
      return `'1.1.${date.getFullYear()}', '31.12.${date.getFullYear()}'`
    case 'Month':
      if(date.getMonth() == 11)
        return `'1.${date.getMonth()+1}.${date.getFullYear()}', '1.1.${date.getFullYear()+1}'`
      return `'1.${date.getMonth()+1}.${date.getFullYear()}', '1.${date.getMonth()+2}.${date.getFullYear()}'`
    case 'Day':
      const today = `'${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}'`
      return `${today}, ${today}` 
  }
  if(!isNumber(inParam))
    return ""
  const intParam = Number(inParam)
  //By Month
  if(intParam > 0 && intParam <= 12)
    return intParam == 12 ? 
      `'1.${intParam}.${date.getFullYear()}', '1.1.${date.getFullYear()+1}'`
      :
      `'1.${intParam}.${date.getFullYear()}', '1.${intParam+1}.${date.getFullYear()}'`
  //By Year
  if(intParam > 2019) {
    console.log(`'1.1.${intParam}', '31.12${intParam}'`)
    return `'1.1.${intParam}', '31.12.${intParam}'`
  }
}