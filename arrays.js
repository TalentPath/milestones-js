let coolArray = new Array(1, 2, 3, 4, 5);

console.log("The contents of coolArray: ", coolArray);
console.log("The length of coolArray: ", coolArray.length);
console.log("The value of the 1st element: ", coolArray[0]);
console.log("The value of the 2nd element: ", coolArray[1]);
console.log("The value of the last element: ", coolArray[coolArray.length-1]);

let k = 3;

console.log("The value at index k(=" + k + ") element: ", coolArray[k]);

coolArray[0] = 100;
coolArray[1] = 99;
coolArray[coolArray.length-1] = 96;

console.log("The value of the first element has been changed to: ", coolArray[0]);
console.log("The value of the 2nd element has been changed to: ", coolArray[1]);
console.log("The value of the last element has been changed to: ", coolArray[coolArray.length-1]);

coolArray.push(6);

console.log("A new element has been appeneded. The new last element is: ", coolArray[coolArray.length-1]);

coolArray.pop();

console.log("The last element was removed (Popped). The new last element is: ", coolArray[coolArray.length-1]);

coolArray.unshift(0);

console.log("A new element has been added to the beginning. The first element is now: ", coolArray[0]);

coolArray.shift();

console.log("The first element was removed. The first element is now: ", coolArray[0]);