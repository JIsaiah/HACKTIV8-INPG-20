/*
Diberikan sebuah function yang menerima parameter array multidimensi, buatlah
sebuah program JavaScript untuk mengubah input menjadi format array of objects
seperti di contoh.
*/

function convert(data){
    var convertObj = {}
    var result = []
    for(i = 0; i < data.length; i++){
        var convertObj = {}
        for(j = 0; j < data[i].length; j++){
            switch(j){
                case 0: convertObj.id = data[i][j]
                    break;
                case 1: convertObj.firstName = data[i][j]
                    break;
                case 2: convertObj.lastName = data[i][j]
                    break;
                case 3: convertObj.email = data[i][j]
                    break;
            }
        }
        result.push(convertObj)
    }
    return result
}

// TEST CASES
console.log(convert([
    [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'],
    [2, 'Sergei', 'Dragunov', 'sergei@mail.com']
]));

/*
[ { id: 1,
    firstName: 'Dimitri',
    lastName: 'Wahyudiputra',
    email: 'dimitri@mail.com' },
    { id: 2,
    firstName: 'Sergei',
    lastName: 'Dragunov',
    email: 'sergei@mail.com' } ]
  */

console.log(convert([]));
  // []