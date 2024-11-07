
console.log('Hola2')


function displayData(data) {
  const table = document.getElementById("data-table");
  data.slice(1).forEach(row => {  // slice(1) omite el encabezado de la hoja
    const newRow = table.insertRow();
    row.forEach(cell => {
      const newCell = newRow.insertCell();
      newCell.textContent = cell;
    });
  });
}
