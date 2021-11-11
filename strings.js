let str1 = 'This is a string.', str2 = 'I am another string.'

console.log(`String one is: "${str1}"" | String two is: "${str2}""`);
console.log(`By concatenating (using + operation between the 2 variables) string one and string two, you get: "${str1 + str2}"`);

if(str2.includes(str1)){
    console.log('String two does NOT include string one.');
} else{
    console.log('String two includes string one.');
}

let waffles = 'Random string';
console.log(`The length of waffles is: ${waffles.length}`);
console.log(`waffles in lowercase is: ${waffles.toLowerCase()}`);
console.log(`waffles in uppercase is: ${waffles.toUpperCase()}`);
console.log(`The first char in waffles is: ${waffles[0]}`);
console.log(`The second char in waffles is: ${waffles[1]}`);
console.log(`The last char in waffles is: ${waffles[waffles.length-1]}`);
let k = 10;
console.log(`The char at k position in waffles is: ${waffles[k]}`);
waffles += "a";
console.log(`Adding "a" to the end of waffles gives us: ${waffles}`);
let firstName = "Jesse";
console.log(`Hello, ${firstName}!`)