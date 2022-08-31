// Grabs html elements to use in JS
const container = document.querySelector('#container');
const resetButton = document.querySelector('.reset');

// Function that makes rows and columns based on input number
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-columns', cols);
    for (i = 0; i < (rows * cols); i++) {
      let cell = document.createElement("div");
      cell.classList.add('test');
    //   cell.textContent = (i + 1);
      container.appendChild(cell).className = "grid-item";
    };
  };

  makeRows (16, 16);

const gridItem = document.querySelectorAll('.grid-item');

// gridItem.addEventListener('mouseover', () => {
//     gridItem.classList.add('hover-styles');
// });

// Makes grid colored when hovered over with mouse
for (let i = 0; i < gridItem.length; i++) {
    gridItem[i].addEventListener('mouseover', () => {
        gridItem[i].classList.add('hover-styles');
    });
};

resetButton.addEventListener('click', () => {
    for (let i = 0; i < gridItem.length; i++) {
        gridItem[i].classList.remove('hover-styles');
    };
});