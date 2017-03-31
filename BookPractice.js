function delay(func, wait) {
  function implementDelay () {
    setTimeout(func(), wait);
  }
  return implementDelay;
}

var waitForFunction = delay(function() { console.log('hello'); }, 2000);
waitForFunction();
// function prepend(element, list) {
//   var newList = list;
//   newList.unshift(element);
//   return newList;
// }

// function nth(list, number) {
//   return list[number];
// }

// function arrayToList(array) {
//   var output = [];
//   for (var i = 0; i < array.length; i++) {
//     output['value'] = i;
//     output['rest'] = arrayToList();
//   }
// }
// function listToArray(list) {
//   var output = [];
//   for (var i  = 0; i < list.length; i++) {
//     nth(list, i)
//   }
// }


// list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// }

// function deepEqual(item1, item2) {
//   var isTrue = false;
//   if (typeof(item1) === typeof(item2) && item1 !== null && item2 !== null) {
//     isTrue = true;
//     for (property in item1) {
//       if (item1[property] !== item2[property]) {
//         isTrue = false;
//       }
//     }
//   }
//   return isTrue;
// };



//Chapter 2-3
// function chessBoard() {
//   var output = '';
//   for (var i = 0; i < 8; i++) {
//     for (var j = 0; j < 8; j++) {
//       if (i%2 === 0) {
//         if (j%2 === 0) {
//           output += ' ';
//         } else {
//           output += '#';
//         }
//       } else {
//         if (j%2 === 0) {
//           output += '#';
//         } else {
//           output += ' ';
//         }
//       }
//     }
//     output += '\n';
//   }
//   return output;
// }

// function fizzBuzz() {
//   for (var i = 0; i < 101; i++) {
//     var output = '';
//     if (i%3 === 0 || i%5 === 0) {
//       if (i%3 === 0) {
//         output = output + 'fizz';
//       }
//       if (i%5 === 0) {
//         output = output + 'Buzz';
//       }
//       console.log(output);
//     } else {
//       output = i;
//       console.log(output);
//     }
//   }
//   return output;
// }