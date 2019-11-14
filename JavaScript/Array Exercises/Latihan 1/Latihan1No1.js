/* No 1
Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka.
Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain
yang bukan angka itu sendiri. Contoh, jika arr adalah 1, 2, 3, 4, 5, maka function akan me-return 120, 60,
40, 30, 24, karena 120 adalah 2 3 4 5, 60 adalah 1 3 4 5, 40 adalah 1 2 4 * 5, dan seterusnya.
*/

function arrayMultiplication(arr2){
    var newArr = []
    var result = 1
    var mark = 0
        for(i = 0; i < arr2.length; i++){
            mark = i
            result = 1
            for(j = 0; j < arr2.length; j++){
                if(j != mark){
                result = result * arr2[j]
                }
            }
            newArr[i] = result
        }
    return newArr
}

// ! TEST CASES
console.log(arrayMultiplication([2, 4, 6]));
console.log(arrayMultiplication([1, 2, 3, 4, 5]));
console.log(arrayMultiplication([1, 4, 3, 2, 5]));
console.log(arrayMultiplication([1, 3, 3, 1]));
console.log(arrayMultiplication([2, 1, 8, 10, 2]));
