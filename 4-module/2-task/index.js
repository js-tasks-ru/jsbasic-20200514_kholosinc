function makeDiagonalRed(table) {
  let rows = table.rows;
  for (let row of rows) {
    let i = row.sectionRowIndex;
    row.cells[i].style.background = "red"
  }
}
