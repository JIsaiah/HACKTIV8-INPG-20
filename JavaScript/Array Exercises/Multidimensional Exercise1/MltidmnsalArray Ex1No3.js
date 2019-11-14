/*
var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]
Dari array numbers di atas, buatlah program JavaScript untuk mencari nilai yang paling sering muncul di dalam array tersebut.
Expected output: 1
*/

function theMode(arr){
    var sortedArr = arr.sort(function(value1, value2){return value1 < value2 ? -1: 1});
    var counterBucket = [];
    var alreadyCounted

    for(i = 0; i < sortedArr.length; i++){
        var marker = sortedArr[i]
        var counter = 0

        if(alreadyCounted !== sortedArr[i]){
            alreadyCounted = marker
            for(j = 0; j < sortedArr.length; j++){
                if(marker === sortedArr[j]){
                    counter++
                }
            }
            counterBucket.push(counter)
        }
    }
    var counterBucketSort = counterBucket.sort(function(value1, value2){return value1 < value2 ? -1: 1});
    return counterBucketSort[0]
}

var numbers = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ];
var result = theMode(numbers)
console.log(result)