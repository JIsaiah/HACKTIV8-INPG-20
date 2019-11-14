/*
var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';
Dari variabel di atas, buatlah sebuah program JavaScript untuk membuat array baru seperti contoh di bawah:
[
  ['dimitri', 'dimitri@mail.com', 'male'],
  ['icha', 'icha@mail.com', 'female'],
  ['windi', 'windi@mail.com', 'female']
]
*/

var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

function stringToArrayMD(string){
    var stringSplit = string.split(',');
    var newArray = [];
    for(i = 0; i < stringSplit.length; i++){
        var spSp = stringSplit[i].split(':')
        newArray.push(spSp)
    } 
    return newArray 
}

var result = stringToArrayMD(text)
console.log(result)