let listOfStrings = ['apple', 'air', 'You', 'Zoo', 'De', 'Ca', 'west', 'xylophone'];

console.log("'listOfStrings' =", listOfStrings);
console.log();

let minLength = 4;
console.log("'minLength' =", minLength);
console.log();

let longestString = "";
let longestLength = 0;
let shortestString = "";
let shortestLength = 9007199254740990;
let longerThan3 = [];
let longerThanMinLength = [];
let firstStringWithA = null;

for (let i = 0; i < listOfStrings.length; i++) {
    const element = listOfStrings[i];
    
    if (element.length < shortestLength)
    {
        shortestString = element;
        shortestLength = element.length;
    }

    if (element.length > longestLength)
    {
        longestString = element;
        longestLength = element.length;
    }

    if (element.length > 3)
    {
        longerThan3.push(element);
    }

    if (element.length > minLength)
    {
        longerThanMinLength.push(element);
    }

    if (element[0].toLowerCase() == 'a' && firstStringWithA == null)
    {
        firstStringWithA = element;
    }

    if (element == "needle")
    {
        console.log("found it!");
    }
}

console.log("The longest string in 'listOfStrings' is =", longestString);
console.log("The shortest string in 'listOfStrings' is =", shortestString);
console.log("The strings in 'listOfStrings' longer than 3 characters are =", longerThan3);
console.log("The strings in 'listOfStrings' longer than 'minLength' characters are =", longerThanMinLength);
console.log("The first string in 'listOfStrings' that begins with the letter 'a' is =", firstStringWithA);

// The following came from https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript/51897069
listOfStrings.sort((a,b)=>a.localeCompare(b));
console.log("'listOfStrings' sorted alphabetically is =", listOfStrings);
console.log("'listOfStrings' sorted reverse alphabetically is =", listOfStrings.reverse());
console.log();