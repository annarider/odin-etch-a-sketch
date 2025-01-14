// Create square divs
const container = document.querySelector("#container");
for (let i = 0; i < 16; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < 16; j++) {
    const square = document.createElement("div");
    square.classList.add("square");
    row.appendChild(square);
  }
  container.append(row);
}

// Create hover effect
const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  // and for each one we add a 'click' listener
  square.addEventListener("mouseenter", (e) => {
  e.target.style.background = 'blue';
  });
});
