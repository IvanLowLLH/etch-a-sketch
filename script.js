let grid_size = 16
let sq_size = 40
let num_color_sq = 0

function createGrid (grid_size, sq_size) {
    const main_div_container = document.querySelector("#main-container")
    for (let row_idx = 0; row_idx < grid_size; row_idx++) {
        const row_div = document.createElement("div")
        row_div.setAttribute("class", "row-div")
        main_div_container.appendChild(row_div)
        for (let col_idx = 0; col_idx < grid_size; col_idx++) {
            const col_div = document.createElement("div")
            col_div.setAttribute("class", "sq-div")
            col_div.setAttribute("id", `${row_idx}-${col_idx}-sq`)
            col_div.style.width = `${sq_size}px`
            col_div.style.height = `${sq_size}px`
            col_div.addEventListener("mouseover", () => colorSquare(col_div))
            row_div.appendChild(col_div)
        }
        
    }
}
createGrid(grid_size, sq_size)

function getRandomRgbColor() {
  const r = Math.floor(Math.random() * 256); // Random number for Red (0-255)
  const g = Math.floor(Math.random() * 256); // Random number for Green (0-255)
  const b = Math.floor(Math.random() * 256); // Random number for Blue (0-255)
  return `rgb(${r}, ${g}, ${b})`; // Return the color string in RGB format
}
function colorSquare (div) {
    div.setAttribute("class", "color-sq-div")
    const random_rgb_str = getRandomRgbColor()
    div.style.backgroundColor = random_rgb_str
    num_color_sq++
    if (num_color_sq < 10) {
        div.style.opacity = num_color_sq / 10
    }
}

function setNewGridSize () {
    let new_grid_size = prompt("Please enter the desired grid size (maximum 100): ", 16)
    if (new_grid_size > 100) {
        alert("Desired grid size too large. Please reduce to less than 100")
        return
    }
    // Current grid dimension
    const main_div_container = document.querySelector("#main-container")
    const main_div_height = main_div_container.offsetHeight
    // Remove grid
    const elementsToRemove = document.querySelectorAll('.row-div')
    elementsToRemove.forEach(element => {
        element.remove();
    });
    // Update new square size
    let new_sq_size = (main_div_height / new_grid_size) - 2
    createGrid(new_grid_size, new_sq_size)
}
const grid_btn = document.querySelector("#set-grid")
grid_btn.addEventListener("click", () => setNewGridSize())

const clear_btn = document.querySelector("#clear")
clear_btn.addEventListener("click", () => {
    const all_grid = document.querySelectorAll('.color-sq-div')
    all_grid.forEach((sq) => {
        sq.setAttribute("class", "sq-div")
    })
})