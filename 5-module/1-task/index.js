function highlight(table) {
  let tbody = table.tBodies;
  let rows = tbody[0].rows;
  for (let row of rows) {
    let status = row.cells[3];
    let gender = row.cells[2];
    let age = row.cells[1];
    if (status.dataset.available == "true") {
      row.classList.add("available")
    } else if (status.dataset.available == "false") {
      row.classList.add("unavailable")
    } else {
      row.setAttribute("hidden", "hidden")
    }
    if (gender.innerHTML == "m") {
      row.classList.add("male");
    } else {
      row.classList.add("female");
    }
    if (age.innerHTML < 18) {
      row.style.textDecoration = "line-through";
    }
  }
}
