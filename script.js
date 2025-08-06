let num_row = 16
let num_col = 16
let num_squares = num_row * num_col

function createGrid () {
    const main_div_container = document.querySelector("#main-container")
    for (let row_idx = 0; row_idx < num_row; row_idx++) {
        const row_div = document.createElement("div")
        row_div.setAttribute("class", "row-div")
        main_div_container.appendChild(row_div)
        for (let col_idx = 0; col_idx < num_col; col_idx++) {
            const col_div = document.createElement("div")
            col_div.setAttribute("class", "grid-div")
            row_div.appendChild(col_div)
        }
        
    }
}
createGrid()
