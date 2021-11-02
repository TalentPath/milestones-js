let listOfNumbers = [11, -2, 33, -4, 55, -6, 77, -8];

console.log("'listOfNumbers' =", listOfNumbers);
console.log();

let largest = -1;
let smallest = Number.MAX_SAFE_INTEGER;
let greaterThanZero = [];
let greaterThanK = [];
let k = 50;
let evens = [];

console.log("'k' =", k);
console.log();

for (let i = 0; i < listOfNumbers.length; i++) {
    const element = listOfNumbers[i];
    if (element > largest)
    {
        largest = element;
    }

    if (element < smallest)
    {
        smallest = element;
    }

    if (element > 0)
    {
        greaterThanZero.push(element);
    }

    if (element > k)
    {
        greaterThanK.push(element);
    }

    if (element % 2 == 0)
    {
        evens.push(element);
    }
}

console.log("The largest element in 'listOfNumbers' is =", largest);
console.log("The smallest element in 'listOfNumbers' is =", smallest);
console.log("The elements greater than '0' in 'listOfNumbers' are =", greaterThanZero);
console.log("The elements greater than 'k' in 'listOfNumbers' are =", greaterThanK);
console.log("The even elements in 'listOfNumbers' are =", evens);
console.log();

console.log("The elements of 'listOfNumbers' sorted from largest to smallest are =", listOfNumbers.sort((a,b)=>a-b).reverse());
console.log("The elements of 'listOfNumbers' sorted from largest to smallest are =", listOfNumbers.reverse());
console.log();