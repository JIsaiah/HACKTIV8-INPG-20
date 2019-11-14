/* No 2
Diberikan sebuah function cTarget(arr) yang menerima satu parameter berupa array yang terdiri dari
karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh,
jika arr adalah 'x', ' ', 'o', ' ', ' ', 'x', maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak
ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

//! UR NOT DONE, SOLVE THIS TARD

function cTarget(arr){
    var newArr = [];
    var i = 0;
    var j = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i].match(/o/)){
            console.log('o is in index:', i)
        }
    }

    for(j = 0; j < arr.length; j++){
        if(arr[j].match(/x/)){
            console.log('x is in index:', j);

        }
        
    }
}

// ! TEST CASES
console.log(cTarget([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
/*
console.log(cTarget(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(cTarget(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(cTarget([' ', ' ', 'o', ' '])); // 0
console.log(cTarget([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
*/