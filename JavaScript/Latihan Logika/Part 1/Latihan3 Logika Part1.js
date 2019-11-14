function sortByCharacter(text){
  var textInArray = text.split('')
    for(i = 0; i < textInArray.length; i++){
      var temp = ''
      for(j = i; j < textInArray.length; j++){
        if(textInArray[i] > textInArray[j]){
          temp = textInArray[i]
          textInArray[i] = textInArray[j]
          textInArray[j] = temp
        }
      }
    }
    return textInArray.join('')
  }
  
  // TEST CASES
  console.log(sortByCharacter('hello')); // 'ehllo'
  console.log(sortByCharacter('truncate')); // 'acenrttu'
  console.log(sortByCharacter('developer')); // 'deeeloprv'
  console.log(sortByCharacter('software')); // 'aeforstw'
  console.log(sortByCharacter('aegis')); // 'aegis'


/*EASIER WAY
function sortByCharacter (text) {
    //var splitText = text.split('');
    //var sortText = splitText.sort();
    //var joinedText = sortText.join('');
    //return joinedText
    }
  }
*/