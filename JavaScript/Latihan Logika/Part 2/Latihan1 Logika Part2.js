/*
Diberikan sebuah function yang menerima satu parameter berupa string.
Function tersebut mengembalikan nilai true jika di dalam string tersebut
terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
Jika tidak ditemukan sama sekali, kembalikan nilai false.
*/

function threeStepsAB(text) { 
    text = text.split("");
    for (var i = 0; i < text.length; i++){
      if (text[i] === " "){
        text.splice(i,1);
      }
    }
    for (var i = 0; i< text.length; i++){
      if (text[i] === "a" && (text[i-3] === "b" || text[i+3] === "b")){
        return true; 
      }
    }
    return false; 
  }


  // TEST CASES
  console.log(threeStepsAB('lane borrowed')); // true
  console.log(threeStepsAB('i am sick')); // false
  console.log(threeStepsAB('you are boring')); // true
  console.log(threeStepsAB('barbarian')); // true
  console.log(threeStepsAB('bacon and meat')); // false
