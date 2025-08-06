let grid_size = 16
let sq_size = 40

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
function colorSquare (div) {
    div.setAttribute("class", "color-sq-div")
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