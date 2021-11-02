let str1 = "Moo";
let str2 = "Quack";

console.log("'str1' =", str1);
console.log("'str2' =", str2);
console.log();

console.log("'str1' concatenated with 'str2' can be done using '+'");
console.log("'str1 + str2' =", str1+str2);
console.log();

console.log(str1, ((str2.includes(str1))? "does appear in":"does not appear in"), str2);
console.log();

// The following can be used to show the line above does work correctly.
// let str3 = "Moos";

// console.log(str1, ((str3.includes(str1))? "does appear in":"does not appear in"), str3);
// console.log();