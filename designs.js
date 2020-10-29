// Select color input
var color = document.getElementById("colorPicker");

// Select size input
var grid = document.getElementById("pixelCanvas");
var form = document.getElementById("sizePicker");
var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

// When size is submitted by the user, call makeGrid()
form.addEventListener('submit', function(e) {
  grid.innerHTML = '';
  e.preventDefault();
  makeGrid();
});

grid.addEventListener('click', function(e) {
  if (e.target.nodeName === 'TD') {
    e.target.style.backgroundColor = color.value;
  }
});

function makeGrid() {

// Your code goes here!
  for (var i = 0; i < height.value; i++) {
    var row = grid.insertRow(0);
    for (var j = 0; j < width.value ; j++) {
      row.insertCell(0);
    }
  }

}
