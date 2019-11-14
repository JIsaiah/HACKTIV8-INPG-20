/*
Diberikan sebuah function yang menerima 1 parameter berupa string yang berisi
value dan dipisahkan dengan koma (Comma Separated Values). Implementasikan
function ini supaya bisa mengembalikan value object literal. Sesuaikan dengan 
format di atas.
*/

function csvToObject(text){
  var info = {
    name: '',
    email: '',
    gender: '',
  }
  splitText = text.split(',')
  for(i = 0; i <= text[i].length; i++){
    info.name = (splitText[0])
    info.email = (splitText[1])
    info.gender = (splitText[2])
  }
  return info
}

  // TEST CASES
console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
  // { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }

console.log(csvToObject('Icha,icha@mail.com,female'));
  // { name: 'Icha', email: 'icha@mail.com', gender: 'female' }

console.log(csvToObject('Dhani,dhani@mail.com,male'));
  // { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }