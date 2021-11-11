// Looping with numbers

// prints all numbers and all even numbers between x & y
function printNumbers(x, y) {
    let result = "";
    let resultEven = "";
    for(let i = x; i <= y; i++) {
        result += i + " ";
        if(i%2 == 0) {
            resultEven += i + " ";
        }
    }   
    console.log("Every integer between " + x + " and " + y + ": ", result);
    console.log("Every even integer between " + x + " and " + y + ": ", resultEven);
}

printNumbers(40,60);

let min = 20;
let max = 30;
console.log("Running with min = " + min + " and max = " + max + ": ");
printNumbers(min,max);

function printMultiples(n, k) {
    let result = "";
    for(let i = 0; i < k; i++) {
        result += n*(i+1) + " ";
    }
    console.log("Running first " + k + " multiples of " + n + ": ", result);
}

printMultiples(7, 10);

let k = 15;
console.log("Running with K = ", k);
printMultiples(7, k);

let n = 5;
console.log("Running with n =", n);
printMultiples(n, k);

// Looping with arrays

let arr = ["apple", "orange", "bannana"];

console.log("Arr has values: ", arr);

console.log("Now printing each value with a loop: ");
for(let i = 0; i < arr.length; i++) {
    console.log("Arr at index " + i + ": ", arr[i]);
}

console.log("Now printing every other value: ");
for(let i = 0; i < arr.length; i+=2) {
    console.log("Arr at index " + i + ": ", arr[i]);
}

console.log("Now printing every element in reverse");
for(let i = arr.length-1; i >= 0; i--) {
    console.log("Arr at index " + i + ": ", arr[i]);
}

// Looping with arrays - with numbers

let listOfNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

console.log("listOfNumbers has values: ", listOfNumbers);

let largest = Number.MIN_SAFE_INTEGER;
let smallest = Number.MAX_SAFE_INTEGER;
const numbersGreaterThanZero = [], numbersGreaterThanK = [];

k = 5;

for(let i = 0; i <= listOfNumbers.length; i++) {
    console.log(i);
    if(i > largest) { largest = i; }
    if(i < smallest) { smallest = i; }
    if(i > 0) { numbersGreaterThanZero.push(i); }
    if(i > k) { numbersGreaterThanK.push(i); }
}

console.log("The largest integer in listOfNumbers is: ", largest);
console.log("The largest integer in listOfNumbers is: ", smallest);
console.log("Numbers greater than zero: ", numbersGreaterThanZero);
console.log("Numbers greater than k(=" + k + "): ", numbersGreaterThanK);
console.log("listOfNumbers sorted by largest to smallest: ", listOfNumbers.sort((a,b)=>b-a));
console.log("listOfNumberes sorted by smallest to largest: ", listOfNumbers.sort());

// Looping with arrays - with strings

let listOfStrings = [ "apple", "box", "needle", "archway", "eye", "fire", "g", "horseshoe"];

let longestString = "", shortestString = "sadfsadfsadfasdfasfasdfasdfsd";
const stringsGreaterThan3 = [], stringsGreaterThanMinLength = [];

let minLength = 4;

let stringWithA = "";
let foundStringWithA = false;
let foundNeedle = false;

listOfStrings.forEach(element => {
    if(element.length > longestString.length) { longestString = element; }
    if(element.length < shortestString.length) { shortestString = element; }
    if(element.length > 3) { stringsGreaterThan3.push(element); }
    if(element.length > minLength) { stringsGreaterThanMinLength.push(element); }
    if(!foundStringWithA && element.charAt(0).toLowerCase() == 'a') {
        stringWithA = element;
        foundStringWithA = true;
    }
    if(element.toLowerCase() == "needle") { foundNeedle = true; }
});

console.log("listOfStrings has values: ", listOfStrings);
console.log("listOfStrings longest string: ", longestString);
console.log("listOfStrings shortest string", shortestString);
console.log("listOfStrings greater than 3: ", stringsGreaterThan3);
console.log("listOfStrings greater than minLength(=" + minLength + "): ", stringsGreaterThanMinLength);
console.log("listOfStrings first element that starts with A: ", stringWithA);
if(foundNeedle) { console.log("found it!"); }

listOfStrings.sort((a,b) => {
    if(a.toLowerCase() < b.toLowerCase()) { return -1; }
    if(b.toLowerCase() < a.toLowerCase()) { return 1; }
    return 0;
});
console.log("listOfSrings sorted alphabetically", listOfStrings);

listOfStrings.sort((a,b) => {
    if(a.toLowerCase() < b.toLowerCase()) { return 1; }
    if(b.toLowerCase() < a.toLowerCase()) { return -1; }
    return 0;
});
console.log("listOfSrings sorted alphabetically reverse", listOfStrings);

// Looping with objects

let coolObject = { 1:"one", 2:"two", 3:"three", 4:"four", 5:"five" }
console.log("coolObject has values: ", coolObject);
console.log("Now printing each key-value pair with a loop: ");
Object.keys(coolObject).forEach(key => {
    console.log(key, coolObject[key]);
});

const objectSorted = Object.entries(coolObject).sort(([,a],[,b]) => {
    if(a.toLowerCase() < b.toLowerCase()) { return -1; }
    if(b.toLowerCase() < a.toLowerCase()) { return 1; }
    return 0;
});

console.log("coolObject sorted by value alphabetically: ", objectSorted);

const objectSortedReverse = Object.entries(coolObject).sort(([,a],[,b]) => {
    if(a.toLowerCase() < b.toLowerCase()) { return 1; }
    if(b.toLowerCase() < a.toLowerCase()) { return -1; }
    return 0;
});

console.log("coolObject sorted by value alphabetically reverse: ", objectSortedReverse);




