var screen = parseFLOAT(document.getElementById("screen"));

function calc(value){
    screen.innerHTML += value;
}
function clearscreen(){
    screen.innerHTML ="0";
}
function result(){
    var result = parseFLOAT(eval(screen.innerHTML));
    screen.innerHTML= result;
}