let containerWidth = 640;
let containerHeight = 640;
let size = 16;
const colors = ["silver", 
"grey", 
"maroon", 
"red",
"purple",
"fuchsia",
"green",
"lime",
"olive",
"yellow",
"navy",
"blue",
"teal",
"aqua"
]


const container = document.querySelector('#container');

const resolutionBtn = document.querySelector("#resolution-btn");

const colorBtn = document.querySelector("#color-btn");


resolutionBtn.addEventListener('click', () => {
    promptedSize = prompt("What resolution would you like?");
    clearBoard();
    generateBoard(promptedSize)
})

colorBtn.addEventListener('click', () => {
    promptedSize = prompt("What resolution would you like?");
    clearBoard();
    generateRandomColorBoard(promptedSize)
})




function generateBoard(size){
    for (let i = 1; i <= size; i++) {

        let row = document.createElement('div');
        row.className = "row";
        row.id = "row" + i;
        container.appendChild(row)
    
        for (let j = 1; j <= size; j++) {
            let square = document.createElement('div');
            square.id = 'row' + i + 'column' + j;
            square.classList.add("square");
            row.appendChild(square);
    
            square.style.width = (containerWidth/size) + "px";
            square.style.height = (containerHeight/size) + "px";
    
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = "black";
            });
    
            
        }
    }
}

function generateRandomColorBoard(size){
    for (let i = 1; i <= size; i++) {

        let row = document.createElement('div');
        row.className = "row";
        row.id = "row" + i;
        container.appendChild(row)
    
        for (let j = 1; j <= size; j++) {
            let square = document.createElement('div');
            square.id = 'row' + i + 'column' + j;
            square.classList.add("square");
            row.appendChild(square);
    
            square.style.width = (containerWidth/size) + "px";
            square.style.height = (containerHeight/size) + "px";
    
            square.addEventListener('mouseover', () => {
                square.style.backgroundColor = generateRandomColor();
            });
    
            
        }
    }
}


function generateRandomColor() {
    
    for (let index = 0; index < 30; index++) {
        let randNum = Math.floor(Math.random() * (colors.length));
        return(colors[randNum]);
    }
}


function clearBoard() {
    let rows = document.querySelectorAll('.row');
    let rowsArr = Array.from(rows);

    for (const rowin of rowsArr) {
        rowin.remove();
    }
}

generateBoard(16);

