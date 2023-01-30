import { jsPDF } from "jspdf"
import autoTable from 'jspdf-autotable'
import { getColumnByIndex } from "./getColumnByIndex"

export const reportGenerator = (titles, slides, footer=null) => {
  const doc = new jsPDF()
  const tableRows = []
  doc.text(``, 15, 10);
  slides.forEach(slide => {
    let column = 0
    const row = []
    titles.map(() => {
      row.push(getColumnByIndex(slide, column++))
    })
    tableRows.push(row)
  });
  if(footer)
    tableRows.push(footer)
  autoTable(doc, {
    head: [titles],
    body: tableRows,
    theme: "plain",
    didParseCell: function (data) {
      var rows = data.table.body;
      if (data.row.index === rows.length - 1) {
          data.cell.styles.fillColor = [122, 122, 122]
          data.cell.styles.textColor = [255, 255, 255]
          data.cell.styles.fontStyle = 'bold'
      }
  }
  })
  window.open(doc.output('bloburl'), '_blank');
}

export default reportGenerator