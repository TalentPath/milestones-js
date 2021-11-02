let num = 10;
let string = "20";

console.log("'num' =", num);
console.log("'string' =", string);
console.log();

console.log("converting 'num' to a string:", num.toString());
console.log("converting 'string' to a number:", parseInt(string));
console.log();

let arr = string.split("");
console.log("'arr' is an array of characters from 'string'");
console.log("'arr =", arr);
console.log();

let arr2 = ["x", "y", "z"];
console.log("'arr2' =", arr2);
console.log("If we join all the strings from 'arr2' we have:", arr2.join(""));
console.log();

console.log("We can use '|' as a separator when joining:", arr2.join("|"));
console.log();