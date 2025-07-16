const numberOfSquares = 10;

const squareBox = document.querySelector(".square-box")
const squareBoxStyle = window.getComputedStyle(squareBox)
console.log(squareBoxStyle.height);
const arr = [255, 255, 255];

squareBox.style.maxHeight = '90vh';
squareBox.style.maxWidth = squareBox.style.maxHeight

squareBox.style.height = "90%";
squareBox.style.width = `${squareBoxStyle.height}`;
console.log(Math.floor(parseFloat(squareBoxStyle.height)));
let squareBoxHeightInt = Math.floor(parseFloat(squareBoxStyle.height))
while (squareBoxHeightInt % numberOfSquares != 0) {
    squareBoxHeightInt--;
}
console.log(`${squareBoxHeightInt}` + 'px');
squareBox.style.height = `${squareBoxHeightInt}` + 'px';
squareBox.style.width = `${squareBoxHeightInt}` + 'px';

console.log(squareBox.style.height);

const squareWidth = squareBoxHeightInt / numberOfSquares;
const squareHeight = squareWidth;
console.log(squareBox);
// while (squareBoxStyle.height) {

// }

const randomColor = function (e) {
    arr[0] = Math.floor(Math.random() * 190 + 80)
    arr[1] = Math.floor(Math.random() * 190 + 80)
    arr[2] = Math.floor(Math.random() * 190 + 80)

    e.target.style.backgroundColor = `rgb(${arr[0]},${arr[1]},${arr[2]})`

}



for (let i = 0; i < numberOfSquares ** 2; i++) {
    const square = document.createElement("div")
    square.classList.add("squares")
    square.style.height = `${squareWidth}` + 'px';
    square.style.width = `${squareWidth}` + 'px';
    square.style.backgroundColor = "white";
    square.style.border = "0.5px solid pink";
    square.style.backgroundColor = `rgb(${arr[0]},${arr[1]},${arr[2]})`
    squareBox.appendChild(square);
    square.addEventListener('mouseover', randomColor)

}







const squareBoxHeight = squareBoxStyle.height
console.log(`rgb(${arr[0]},${arr[1]},${arr[2]})`);


