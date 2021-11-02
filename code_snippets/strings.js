let str1 = "hello";
let str2 = "world";

console.log("str1 is " + str1 + " and str2 is " + str2);
console.log("you can concatenate strings with + or .join: " + (str1 + str2));
console.log(`The word "${str1}" ${str1.includes(str2) ? 'does' : 'does not'} contain ` + str2);

let waffles = "Waffles"

console.log(waffles + "has " + waffles.length + " characters");
console.log(waffles + " in all uppercase is " + waffles.toUpperCase());
console.log(waffles + " in all lowercase is " + waffles.toLowerCase());
console.log("The first letter of " + waffles + " is " + waffles[0]);
console.log("The second letter of " + waffles + " is " + waffles[1]);
console.log("The last letter of " + waffles + " is " + waffles[waffles.length - 1]);

let k = 4;
console.log("The kth letter of " + waffles + ", where k is " + (k + 1) + " is " + waffles[k]);
console.log("you can append letters to the ends of words. " + waffles + " plus a is " + waffles.concat("a"));
