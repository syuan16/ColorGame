var numSquares = 6
var colors = generateColors(numSquares)
var squares = document.querySelectorAll(".square")
var goal = pickColor()
var colorDisplay = document.getElementById("colorDisplay")
var message = document.querySelector("#message")
var h1 = document.querySelector("h1")
var reset = document.querySelector("#reset")
var easy = document.querySelector("#easyBtn")
var hard = document.querySelector("#hardBtn")

easy.addEventListener("click", function () {
    reset.textContent = "New Colors"
    h1.style.background = "steelblue"
    hard.classList.remove("selected")
    easy.classList.add("selected")
    numSquares = 3
    colors = generateColors(numSquares)
    goal = pickColor()
    colorDisplay.textContent = goal
    for (var i = 0; i < squares.length; ++i) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }
})

hard.addEventListener("click", function () {
    reset.textContent = "New Colors"
    h1.style.background = "steelblue"
    easy.classList.remove("selected")
    hard.classList.add("selected")
    numSquares = 6
    colors = generateColors(numSquares)
    goal = pickColor()
    colorDisplay.textContent = goal
    for (var i = 0; i < squares.length; ++i) {
            squares[i].style.background = colors[i]
            squares[i].style.display = "block"
        }
})

reset.addEventListener("click", function () {
    reset.textContent = "New Colors"
    message.textContent = ""
    colors = generateColors(numSquares)
    goal = pickColor()
    colorDisplay.textContent = goal
    for (var i = 0; i < squares.length; ++i) {
        squares[i].style.background = colors[i]
    }
    h1.style.background = "steelblue"
})

colorDisplay.textContent = goal

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i]
    squares[i].addEventListener("click", function () {
    var clicked = this.style.background
        if  (clicked === goal) {
            message.textContent = "Correct!"
            reset.textContent = "Play Again?"
            changeColors(clicked)
            h1.style.background = goal
        } else {
            this.style.background = "#232323"
            message.textContent = "Try Again"
        }
    })
}

function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function generateColors(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }

    return arr
}

function randomColor() {
    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    var rgbColor = "rgb(" + r + ", " + g + ", " + b + ")"
    return rgbColor
}