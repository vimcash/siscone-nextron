import { writeFileSync } from "fs"
import { formatDate, getRandomInt } from "."
import { getColumnByIndex } from "./getColumnByIndex"
import * as child from 'child_process'; 

export const exportCSV = (titles, slides, footer=null, top=null) => {
  let content = `${top}\r`
  titles.map(title => content = content ? `${content},${title}`: title)
  slides.forEach(slide => {
    content = `${content}\r`
    let column = 0
    titles.map(() => {
      content = `${content}${getColumnByIndex(slide, column++).replace(',', '')}${column < (titles.length)? ',': ''}`
    })
  })
  if(footer)
    content = `${content}\r${footer}`
  const fileName = formatDate(new Date(),`ddMMyyhhmmss${getRandomInt(10)}.csv`)
  writeFileSync(`../../../../Documents/${fileName}`, content)
  child.exec(`%USERPROFILE%\\Documents\\${fileName}`)
  console.log("Comando ejecutado!")
}

export default exportCSV