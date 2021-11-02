let blah = 12;

console.log("blah is =", blah);
console.log();

console.log("The right-most digit in 'blah' can be found using %");
console.log(blah, "% 10 =", blah%10, ", which is indeed the right-most digit of", blah);
console.log();

console.log("By using '%', we can also determine if a number is odd or even");
console.log("If 'blah % 2' returns 0, the number is even, otherwise it's odd");
console.log(blah, "% 2 =", blah%2, ", therefore", blah, "is", ((blah%2==0)?"even":"odd"));
console.log();

console.log(blah, "+ 1 =", blah+1);
console.log(blah, "+ 2 =", blah+2);
console.log(blah, "+ 10 =", blah+10);
let k = 7;
console.log("If we have k =", k, ", then", blah, "+ k =", blah+k);
console.log();

console.log(blah, "- 1 =", blah-1);
console.log(blah, "- 2 =", blah-2);
console.log(blah, "- 10 =", blah-10);
console.log("If we have k =", k, ", then", blah, "- k =", blah-k);
console.log();