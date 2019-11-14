/*
Implementasikan function di atas agar mengembalikan object baru sesuai dengan
pattern yang diberikan di test cases
*/

function complexConversion(text){
    var obj = {}
    var textSplit = text.split(',')
    for(i = 0; i < textSplit.length; i++){
        var reSplit = textSplit[i].split(':')
        obj[reSplit[0]] = reSplit[1]
    }
    return obj
}

  // TEST CASES
console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(complexConversion('name:Erwin,gender:male,age:21'));
  // { name: 'Erwin', gender: 'male', age: '21' }

console.log(complexConversion('city:Surabaya,province:East Java'));
  // { city: 'Surabaya', province: 'East Java' }