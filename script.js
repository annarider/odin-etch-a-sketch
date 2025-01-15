
function drawGrid(number = 16) {
  // Create square divs
  const container = document.querySelector("#container");
  for (let i = 0; i < number; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < number; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      row.appendChild(square);
    }
    container.append(row);
  }
};

function createHover() {
  // Create hover effect
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    let randomHexColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    // and for each one we add a 'click' listener
    square.addEventListener("mouseenter", (e) => {
    e.target.style.background = randomHexColor;
    });
  });
};

function deleteGrid(){
  const container = document.querySelector("#container");
  container.replaceChildren();
  return container;
}

function sketch(number) {
  drawGrid(number);
  createHover();
}

function redraw() {
  const button = document.querySelector("#number");
  button.addEventListener("click", () => { 
    let number = +prompt('How big of a grid do you want? Enter a positive integer between 1 and 99.', 16);
    if (number > 100) {
      number = +prompt('Keep the number below 100.', 16);
    }
    deleteGrid();
    sketch(number);
})
};

sketch();
redraw();