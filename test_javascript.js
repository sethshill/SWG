// Test javascript for practicing

// function isEven(num) {
// 	if (num === 0) {
// 		return true;
// 	}
// 	else if ((num - 2) < 0) {
// 		return false;
// 	} else {
// 		return isEven(num-2);
// 	}
// }

// alert(isEven(50));
// alert(isEven(75));
// alert(isEven(-1));

// function countBs(string) {
// 	var countsOfB = 0;
// 	for (var i = 0; i < string.length; i++) {
// 		if (string[i] === 'B') {
// 			countsOfB++;
// 		}
// 	}
// 	return countsOfB;
// }

// function countChar(string, char) {
// 	var counts = 0;
// 	for (var i = 0; i < string.lenth; i++) {
// 		if (string[i] === 'char') {
// 			counts++;
// 		}
// 	}
// 	return counts;
// }

// alert(countChar('Bonobo', o));

function reverseArray(array) {
	var reversedArray = [];
	for (var i = array.length-1; i >= 0; i--) {
		reversedArray.push(array[i]);
	}
	return reversedArray;
}

function reverseArrayInPlace(array) {
	for (var i = 1; i < array.length; i++) {
		array,shift(array[i]);
	}
	return array;
}
alert(reversedArray([1, 2, 3, 4]));
alert(reverseArrayInPlace([1, 2, 3, 4]));
alert('hello');





















