/*
Buatlah sebuah program JavaScript untuk membuat output seperti di bawah ini:
ID: 1 Name: Dimitri Company: Hacktiv8
ID: 2 Name: Dhani Company: Hacktiv8
ID: 3 Name: Icha Company: Hacktiv8
*/

var people = [
    [1, 'Dimitri', 'Hacktiv8'],
    [2, 'Dhani', 'Hacktiv8'],
    [3, 'Icha', 'Hacktiv8']
  ];

console.log('ID: '+ people[0][0], 'Name: ' + people[0][1], 'Company: ' + people[0][2])
console.log('ID: '+ people[1][0], 'Name: ' + people[0][2], 'Company: ' + people[0][2])
console.log('ID: '+ people[2][0], 'Name: ' + people[0][3], 'Company: ' + people[0][2])

//! OR !//

var people = [
    [1, 'Dimitri', 'Hacktiv8'],
    [2, 'Dhani', 'Hacktiv8'],
    [3, 'Icha', 'Hacktiv8']
  ];

function dataLooping(data){
    for(i = 0; i < data.length; i++){
        var result = ''
        for(j = 0; j < data[i].length; j++){
            if(j === 0){
                result += 'ID: ' + data[i][j]
            } else if(j === 1){
                result += ' Name: ' + data[i][j]
            } else{
                result += ' Company: ' + data[i][j]
            }
        }
        console.log(result)
    }
}

console.log(dataLooping(people))