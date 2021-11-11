let num = 1234;
console.log("Num, which has a value of: " + num + ", can be converted to a string using toString(): ", num.toString());
console.log("Num converted to int can be done with parseInt: ", parseInt("1234"));

let string = "apples";

let arr = [...string];

console.log("The variable string has a value: ", string);
console.log("The variable arr, initalized using the value of string, has values of: ", arr);

let stringArr = ["one", "--two--", "three"];

console.log("The variable stringArr has values of: ", stringArr);
console.log("Concatenated into one string: ", stringArr.join());
console.log("Concatenated into one string with '|' between each element: ", stringArr.join("|"));