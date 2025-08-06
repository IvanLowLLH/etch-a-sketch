let grid_size = 16

function createGrid () {
    const main_div_container = document.querySelector("#main-container")
    for (let row_idx = 0; row_idx < grid_size; row_idx++) {
        const row_div = document.createElement("div")
        row_div.setAttribute("class", "row-div")
        main_div_container.appendChild(row_div)
        for (let col_idx = 0; col_idx < grid_size; col_idx++) {
            const col_div = document.createElement("div")
            col_div.setAttribute("class", "sq-div")
            col_div.setAttribute("id", `${row_idx}-${col_idx}-sq`)
            row_div.appendChild(col_div)
        }
        
    }
}
createGrid()
function colorSquare (div) {
    div.setAttribute("class", "color-sq-div")
}
const sq_divs = document.querySelectorAll(".sq-div")
sq_divs.forEach((sq_div) => {
            sq_div.addEventListener("mouseover", () => colorSquare(sq_div))
        })

function setNewGridSize () {
    let new_grid_size = prompt("Please enter the desired grid size (maximum 100): ", 16)
    if (new_grid_size > 100) {
        alert("Desired grid size too large. Please reduce to less than 100")
        return
    }
    grid_size = new_grid_size
    // Remove grid
    const elementsToRemove = document.querySelectorAll('.row-div');
    elementsToRemove.forEach(element => {
        element.remove();
    });
    createGrid()
}
const grid_btn = document.querySelector("#set-grid")
grid_btn.addEventListener("click", () => setNewGridSize())