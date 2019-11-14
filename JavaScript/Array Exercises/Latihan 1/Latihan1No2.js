/* No 2
Diberikan sebuah function cTarget(arr) yang menerima satu parameter berupa array yang terdiri dari
karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh,
jika arr adalah 'x', ' ', 'o', ' ', ' ', 'x', maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak
ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/

function cTarget(arr){
    var newArr = [];
    var index1 = 0;
    var index2 = 0;
    var accomodate = 0;

        if(arr.indexOf('x') === -1){
            return 0
        }
        else{
            for(i = 0; i < arr.length; i++){
                if(arr[i] === 'x'){
                    index1 = i
                    newArr.push(index1)
                }
                else if(arr[i] === 'o'){
                    index2 = i
                }
                var result = []
                for (var j = 0; j < newArr.length; j++){
                    accomodate = Math.abs(index2 - newArr[j]);
                    result.push(accomodate)
                    result.sort()
                }
            }
            return result[0]
    }
}


// ! TEST CASES
console.log(cTarget([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(cTarget(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(cTarget(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(cTarget([' ', ' ', 'o', ' '])); // 0
console.log(cTarget([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2