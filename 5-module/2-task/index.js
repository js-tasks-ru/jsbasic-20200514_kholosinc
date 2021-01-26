function SortableTable(items) {
  this.el = document.createElement('table');

  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  thead.innerHTML = `
         <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
         </tr>
    `;

  this.el.appendChild(thead);
  this.el.appendChild(tbody);

  function render() {
    tbody.innerHTML = items.map((item) => {
      let row = '';

      for (const key in item) {
        row += `<td>${item[key]}</td>`;
      }

      return `<tr>${row}</tr>`;
    }).join('');
  }

  this.sort = (column, desc = false) => {
    items = items.sort((a, b) => {
      const keyA = Object.keys(a)[column];
      const keyB = Object.keys(b)[column];

      if (desc) {
        return a[keyA] < b[keyB] ? 1 : -1;
      }

      return a[keyA] > b[keyB] ? 1 : -1;
    });

    render();
  };

  render();

 
}
