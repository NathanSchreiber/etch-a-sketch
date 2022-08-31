// Grabs html elements to use in JS
const container = document.querySelector('#container');
const resetDrawingButton = document.querySelector('.reset-drawing');
const resetGridButton = document.querySelector('.reset-grid');
const sizeButton = document.querySelector('.grid-size-button');

// Function that makes rows and columns based on input number
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };

// Prompt for choosing grid dimensions
function gridSize() {
    let w = prompt("Enter Width", 16);
    let h = w;
    makeRows(h, w);
};

// Gets dimensions after size button is clicked, then enables drawing.
sizeButton.addEventListener('click', () => {
    gridSize();
    const gridItem = document.querySelectorAll('.grid-item');
    // Makes grid colored when hovered over with mouse
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].addEventListener('mouseover', () => {
            gridItem[i].classList.add('hover-styles');
        });
    };
    // Resets grid to original colors
    resetDrawingButton.addEventListener('click', () => {
        for (let i = 0; i < gridItem.length; i++) {
            gridItem[i].classList.remove('hover-styles');
        };
    });
    // Resets grid completely
    resetGridButton.addEventListener('click', () => {
        for (let i = 0; i < gridItem.length; i++) {
            gridItem[i].remove();
        };
    });
});