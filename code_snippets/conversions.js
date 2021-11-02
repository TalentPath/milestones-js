let num = 1234;

console.log("You can convert a number to a string with toString. For example: "
+ num + " is a " + (typeof num));
num = num.toString();
console.log("After being converted, " + num + " is a " + (typeof num));
num = parseInt(num);
console.log("You can also convert a string to a number with parseInt(). " + num + " is now a " +
(typeof num) + " again");

let apples = "apples";
console.log("you can split a string with split(). Apples is now " + apples.split(""));

let arrayOfStrings = ['one', '--two--', 'three'];
console.log("You can join the elements in an array with array.prototype.join. " + arrayOfStrings +
" is now " + arrayOfStrings.join(''));

let array2 = ['one', 'two', 'three']
console.log("You can also join them using a delimiter " + array2 + " is now " +
array2.join('|'));