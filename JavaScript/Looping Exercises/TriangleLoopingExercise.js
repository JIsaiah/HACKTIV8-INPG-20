/* WRITE A PROGRAM TO DISPLAY:

*                       *****
**                      ****
***         and         ***
****                    **
*****                   *

*/
// Incremental
var triangle = "*";

for(s = '1'; s <= '5'; s++){
    console.log(triangle)
    triangle += "*"
}
console.log('==========')

// Incremental 2
var star = "";

for(s = '1'; s <= '5'; s++){
    star = star + '*'
    console.log(star)
}
console.log('==========')

// Decremental
var star = "*****";

for(s = 5; s > 0; s--){
    // s = 5
    star = ''
    // star = '' to reset the '*' so the previous '**' isn't carried on
    for(i = 0; i < s; i++){
        /*
        iteration: 0
            star = '*'
        iteration: 1
            star = '**'
        iteration: 2
            star = '***'
            .
            .
            star = '*****'
        */
        star = star + '*'
    }
    // '*****'
    console.log(star)
}