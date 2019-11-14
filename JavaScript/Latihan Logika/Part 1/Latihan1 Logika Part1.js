function compareNumbers (firstNumber, secondNumber) {
    if(firstNumber < secondNumber){
        return true
    } else if(firstNumber > secondNumber){
        return false
    } else{
        return -1
    }
  }
  
  // TEST CASES
  console.log(compareNumbers(5, 8)); // true
  console.log(compareNumbers(5, 3)); // false
  console.log(compareNumbers(4, 4)); // -1
  console.log(compareNumbers(3, 3)); // -1
  console.log(compareNumbers(17, 2)); // false