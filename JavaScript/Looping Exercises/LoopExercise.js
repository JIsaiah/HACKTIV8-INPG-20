//EXERCISE 1
//No 1
function square(){
   var star = "*****";
   var plus = "";
   
   for(s = 5; s > 0; s--){
       star = ''
       
        for(i = 0; i < s; i++){
            star = star + '*'
        }
        for(g = '-5'; g > '-1'; g++){
          plus += "+"
        }
        console.log(star + plus)
   }
}

square()

console.log("==========")

//No 2 (CONDITIONAL)


console.log("==========")
//No 2 (ARRAY)
function DMY(date, month, year){
    monthName = ["January", "February", "March", "April", "May",
                 "June", "July", "August", "September", "October",
                 "November", "December"];
            return date + " " + monthName[month - 1] + " " + year
}
console.log(DMY(1,10,2019))

console.log("==========")

//No 3
function dcNo(no1, no2){
    if(no1 > no2){
        console.log("true")
    }
        else if(no1 < no2){
            console.log("false")
        }
            else{
                dcNo = -1
                console.log(dcNo)
            }
}

dcNo(5, 3)

console.log("==================================================")

//Bonus suffering
function a(value){
    return value
}

function b(value){
    return value
}

function c(){
    var valueA = a(5)
    var valueB = b(4)
    return valueA + valueB
}

var result = c()
console.log(result)

console.log('================================================================')

//Bonus suffering 2
function e(value){
    return value
}
function f(value){
    return value
}
function g(){
    var isie = e(7)
    var isif = f(7)
    return isie + isif
}

var result = g(isie, isif)
console.log(g())