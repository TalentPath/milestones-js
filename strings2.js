let waffles = "Yum";

console.log("'waffles' =", waffles);
console.log();

console.log(waffles, "is", waffles.length, "characters long");
console.log(waffles, "becomes", waffles.toUpperCase(), "when made uppercase");
console.log(waffles, "becomes", waffles.toLowerCase(), "when made lowercase");
console.log("The first character in", waffles, "is", waffles[0]);
console.log("The second character in", waffles, "is", waffles[1]);
console.log("The last character in", waffles, "is", waffles.slice(-1));
console.log();

let k = 1;
console.log("'k' is =", k, ", so the character at index k in", waffles, "is", waffles[k]);

waffles = waffles+'a';
console.log("'waffles' has had 'a' appended to it and is now =", waffles);
console.log();

let firstName = "John";
console.log("firstName =", firstName);
console.log("The following is written as 'Hello, ${firstName}'");
console.log(`Hello, ${firstName}`);