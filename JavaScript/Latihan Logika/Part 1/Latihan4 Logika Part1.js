function isArithmeticProgression(numbers){
    for(i = 0; i < numbers.length; i++){
        if(numbers[numbers.length - 1] - numbers[numbers.length - 2] === numbers[1] - numbers[0]){
            if(numbers[3] - numbers[2] === numbers[numbers.length - 1] - numbers[numbers.length -2]){
            return true
            }
        else{
            return false
        }
        }
    else{
        return false
    }
    }
}

  // TEST CASES
  console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6])); // true
  console.log(isArithmeticProgression([2, 4, 6, 12, 24])); // false
  console.log(isArithmeticProgression([2, 4, 6, 8])); // true
  console.log(isArithmeticProgression([2, 6, 18, 54])); // false
  console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9])); // false