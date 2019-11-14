/*
Implementasikan function di atas agar mengembalikan key yang memiliki value saja
(bukan undefined)
*/
//! NOT DONE YET
function deleteUndefinedKeys(object){
    var keysKey = {
        name: undefined,
        age: undefined,
        email: undefined,
    }
    var keyLength = Object.keys(keysKey).length
    var keysKey = object

    for(i = 0; i <= keyLength; i++){
        var keyArr = Object.values(keysKey)
        if(keyArr.indexOf('undefined')){
            var finalArr = keyArr.filter(e => e !== undefined);
            console.log(finalArr)
        }
    }
}

console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
}));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
}));
  // {}