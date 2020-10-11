function makeDiagonalRed(table) {
  let rows = table.rows;
  for (let row of rows) {
    let i = row.sectionRowIndex;
    row.cells[i].style.background = "red"
  }
  // let tr = document.querySelectorAll("tr");
  // for (let i = 0; i < tr.length; i++) {
  //   let td = tr[i].querySelectorAll("td")
  //   td[i].style.background = "red"
  // }
}
