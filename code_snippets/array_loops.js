let coolArray = ["apples", "oranges", "bananas", "peaches"]

console.log("First we will loop through and display all of the items of coolArray:");
coolArray.forEach(item => console.log(item));

console.log("Next we will loop through every other item of coolArray and display them:");
for(let i = 0; i < coolArray.length; i += 2)
    console.log(coolArray[i]);

console.log("Next we will loop through and display the items of coolArray backwards:")
for(let i = coolArray.length - 1; i >= 0; i--)
{
    console.log(coolArray[i]);
}

let listOfNumbers = [1, 10, -32, 104, 44, -20, 8, 98];
listOfNumbers.forEach(number => console.log(number));
console.log("There are multiple ways to find the largest number in an array. One is to use Math.max:");
console.log(Math.max(...listOfNumbers));
console.log("Another is to use a for loop that keeps track of the index of the highest number found:");
let largestIndex = 0;
for(let i = 0; i < listOfNumbers.length; i++)
{
    if(listOfNumbers[i] > listOfNumbers[largestIndex]) 
        largestIndex = i;
}
console.log(listOfNumbers[largestIndex]);
console.log("Next we will print every number that is greater than 0:")
for(let i = 0; i < listOfNumbers.length; i++)
{
    if(listOfNumbers[i] > 0) 
        console.log(listOfNumbers[i]);
}
let k = 37
console.log("Next we'll print every number greater than k, where k is " + k);
for(let i = 0; i < listOfNumbers.length; i++)
{
    if(listOfNumbers[i] > k) 
        console.log(listOfNumbers[i]);
}
console.log("Next we'll print all the even numbers in the array");
for(let i = 0; i < listOfNumbers.length; i++)
{
    if(listOfNumbers[i] % 2 == 0) 
        console.log(listOfNumbers[i]);
}

console.log("Next, we'll print the array sorted from smallest to largest number");
console.log(listOfNumbers.sort((a, b) => a - b));
console.log("After that, we'll reverse the order from largest to smallest");
console.log(listOfNumbers.sort((a,b) => b - a));

let listOfStrings = ["One Piece", "Fullmetal Alchemist", "Mob Psycho 100", "Haikyuu", "Naruto",
"Goodnight Punpun", "Akira", "My Hero Academia", "7 Billion Needles"];
console.log(listOfStrings);

console.log("First we will print the longest string in the list of manga titles.");
let longest = "";
for(title of listOfStrings)
{
    if (title.length > longest.length)
        longest = title;
}
console.log("Longest title: " + longest);
console.log("Next we will print the shortest string in the list");
let shortest = listOfStrings[0];
for(title of listOfStrings)
{
    if(title.length < shortest)
        shortest = title;
}
console.log("Shortest title: " + shortest);
console.log("Next we will print all titles with a length greater than 3");
for(title of listOfStrings)
{
    if(title.length > 3)
        console.log(title);
}
let minLength = 10;
console.log("Next we will print all titles with more characters than the minLength, which is " + minLength);
for(title of listOfStrings)
{
    if(title.length > minLength)
        console.log(title);
}
console.log("Next we will print all titles that start with the letter 'A'")
for(title of listOfStrings)
{
    if(title[0] == 'A')
        console.log(title);
}

console.log("Next we will check if any of the manga titles have the word 'needle' in them");
listOfStrings.find(title => {
    if(title.toLowerCase().includes('needle'))
        console.log("found it!");
})

console.log("Finally, we will sort all of the titles alphabetically, both forward and back");
console.log(listOfStrings.sort((a, b) =>
{
    let titleA = a.toLowerCase();
    let titleB = b.toLowerCase();
    if(titleA > titleB)
        return 1;
    else
        return -1;
}));
console.log("and, to print it reversed.");
console.log(listOfStrings.sort((a, b) =>
{
    let titleA = a.toLowerCase();
    let titleB = b.toLowerCase();
    if(titleA > titleB)
        return -1;
    else
        return 1;
}));