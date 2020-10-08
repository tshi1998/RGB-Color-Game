var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 155, 0)",
    "rgb(255, 0, 150)",
    "rgb(0, 100, 0)",
    "rgb(0, 0, 150)",
    "rgb(255, 255, 150)"
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //Add initial colors to square
    squares[i].style.backgroundColor = colors[i];

    //Add click listeners to square
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
       
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Corect";
            changeColors(clickedColor);
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }

    });

}

function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
}