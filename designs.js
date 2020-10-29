// Select color input
const color = document.getElementById("colorPicker");

// Select size input
const grid = document.getElementById("pixelCanvas");
const form = document.getElementById("sizePicker");
const height = document.getElementById("inputHeight");
const width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(e) {
  grid.innerHTML = '';
  e.preventDefault();
  makeGrid();
});



function makeGrid() {

// Your code goes here!
  for (let i = 0; i < height.value; i++) {
    const row = grid.insertRow(0);
    for (let j = 0; j < width.value ; j++) {
      const cell = row.insertCell(0);
      cell.addEventListener('click', function(e) {
        if (e.target.nodeName === 'TD') {
          e.target.style.backgroundColor = color.value;
        }
      });
    }
  }

}
