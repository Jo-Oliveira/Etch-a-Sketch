const container = document.querySelector(".container");

let size = 16;


// Using a loop to insert the boxes inside the container
function createGrid(size) {
    container.innerHTML = "";
    let squareSize = 100 / size + "%";

for(let i = 0; i < size * size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");

    newDiv.style.border = "1px solid gray";
    newDiv.style.boxSizing = "border-box";
    newDiv.style.width = squareSize;
    newDiv.style.height = squareSize;
    container.appendChild(newDiv);
}

//Randomize Colors
function randColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + b + "," + b + ")"; 
}

// Drawing effect with increase opacity and random colors
const divs = container.querySelectorAll(".grid-item");

divs.forEach(div => {
    div.addEventListener("mouseover", function(e) {
    let opacity = parseFloat(div.style.opacity) || 0; 
    if (opacity < 1) {
        div.style.opacity = opacity + 0.1; 
        div.style.backgroundColor = randColor();
    }
    })
})

}

createGrid(size);

//button to change grid size 
const btn = document.querySelector("#btnChangeGrid");

btn.addEventListener("click", function() {
    let newSize = parseInt(prompt("Insert a number for the new grid!"));
    if(newSize >= 100) {
        alert("The number should be less than 100");
         newSize = parseInt(prompt("Insert a number for the new grid!"));
    }
    
    if(!Number.isInteger(newSize)) {
        alert("Please try again!");
    } else {
        // Remove all existing divs inside the container and create a new
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        createGrid(newSize);
    }
})
