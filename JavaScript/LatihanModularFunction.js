function square(number){
    var square = number * number
    return square
}

function pi(){
    var pi = 3.142;
    return pi
}

var area = square(7) * pi();

console.log(Math.round(area));
// For square(7), result should be 154