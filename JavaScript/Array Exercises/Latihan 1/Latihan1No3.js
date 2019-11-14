/* No 3
Diberikan sebuah function numberProcessing(numberArr) yang menerima satu parameter berupa
array yang berisikan angka. Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat),
bilangan ganjil dan bilangan genap.
*/

function numberProcessing(arr){

    arr.min = function numberProcessing(arr){
        return Math.min.apply(Math, arr)
    }
    
    arr.max = function numberProcessing(arr){
        return Math.max.apply(Math, arr)
    }

    arr.mean = function numberProcessing(arr){
        sum = arr.reduce((a, b)=> a + b, 0)
        mean = sum / arr.length
        mean = Math.round(mean)

        return mean
    }

    function odds(arr){
        var evens = [];
        var odds = [];

        var evenNumbers = function(arr) {
            for (var i = 0; i < nums.length; i++) {
                if ((nums[i] % 2) != 1) {
                evens.push(arr[i]);
                }
            else {
                odds.push(arr[i]);
                }
            }
        }

    return 'Min: ' +arr.min(arr) + ' Max: ' +arr.max(arr) + ' Mean: ' +arr.mean(arr) + ' Odds: ' +odds(arr) + ' Evens: ' +evens(arr) + '.';
}

console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));

// "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0