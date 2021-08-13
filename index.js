var numSquares = 6;
var resetButton = document.getElementById("reset");
var easyButton = document.getElementById("easyBtn");
var hardButton = document.getElementById("hardBtn");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var winsDisplay = document.getElementById("win");
var lossesDisplay = document.getElementById("loss");
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
hardButton.classList.add("selected");
var wins = 0;
var losses = 0;


colorDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function () {
    reset();
})

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;

        if (pickedColor === clickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(pickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play Again?";
            wins++;
            reset();
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = "Wrong!";
            losses++;
            reset();
        }
    });
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = getRandomNumber(0, 255);
    var g = getRandomNumber(0, 255);
    var b = getRandomNumber(0, 255);
    return `rgb(${r}, ${g}, ${b})`;
}

function getRandomNumber(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    winsDisplay.textContent = wins;
    lossesDisplay.textContent = losses;
}