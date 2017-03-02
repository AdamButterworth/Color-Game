var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons(){
    for(var i =0; i < modeButtons.length; i++){
            modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // }   else {
            //     numSquares = 6;
            // }
            reset();
        });
    }
}

function setupSquares(){
    for (var i = 0; i < squares.length; i++){
        //add click listeners to squares
        squares[i].addEventListener("click", function(){
            //grab color of clicker squares
            var clickedColor = this.style.background;
            //compare color to pickedColor
            if (clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again?"
                changeColors(clickedColor);
                h1.style.background = pickedColor;
            }   else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}



function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color;
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors"
    //change message display
    messageDisplay.textContent = "";
    //change colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
        squares[i].style.display = "block";
        squares[i].style.background = colors[i];
    }   else {
        squares[i].style.display = "none"
    }

}
    //change background
    h1.style.background = "steelblue";
}


//
// easyBtn.addEventListener("click", function(){
//     hardBtn.classList.remove("selected")
//     easyBtn.classList.add("selected")
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for(var i = 0; i< squares.length; i++){
//         if (colors[i]){
//             squares[i].style.background = colors[i];
//         }   else{
//             squares[i].style.display = "none"
//         }
//     }
// });
//
// hardBtn.addEventListener("click", function(){
//         hardBtn.classList.add("selected")
//         easyBtn.classList.remove("selected")
//         numSquares = 6;
//         colors = generateRandomColors(numSquares);
//         pickedColor = pickColor();
//         colorDisplay.textContent = pickedColor;
//         for(var i = 0; i< squares.length; i++){
//                 squares[i].style.background = colors[i];
//                 squares[i].style.display = "block";
//
//         }
// })

resetButton.addEventListener("click", function(){
    reset();
})

for (var i = 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicker squares
        var clickedColor = this.style.background;
        //compare color to pickedColor
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.background = pickedColor;
        }   else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again!"
        }
    });
}

function changeColors(color){
    //loop through all squares
    for (var i = 0; i < colors.length; i++){
        squares[i].style.background = color;
    }
    //change each color to match given color
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    //make an array
    var arr = [];
    //repeat num times
    for(var i =0; i < num; i++){
        //getRandom color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;

}

function randomColor(){
    // pick a "red" from 0 to 255
    var r = Math.floor(Math.random() * 256)
    // pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")";

}
