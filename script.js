
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
}

function generateRandomColor(opacity = 1) {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `rgb(${r}, ${g}, ${b}, ${opacity})`; // Collect all to a css color string
  return rgb;
}

function createHover() {
  const opacityIncrement = 0.1;
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    // each square tracks its own color & opacity
    let opacity = 0.1; 
    let color = generateRandomColor(opacity);
    // for each one we add a 'click' listener
    square.addEventListener("mouseenter", (e) => {
      e.target.style.background = color;
      if (opacity < 1.0) {
        opacity += opacityIncrement;
      }
      color = color.slice(0, -4) + opacity.toFixed(1) + ')';
      console.log(color);
    });
  });
}

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
}

sketch();
redraw();