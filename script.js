var screen = document.getElementById("screen");

function calc(value){
    screen.innerText += value;
}
function clearscreen(){
    document.getElementById("screen").innerText = screen.innerText.slice(0, - 1);
}
function result(){
    var result = eval(screen.innerText);
    screen.innerText= result;
}
