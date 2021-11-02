let personData = {};

console.log("Adding first name Jean-Luc to personData");
personData.firstName = "Jean-Luc";
console.log(personData);

console.log("Adding last name Picard to personData");
personData.lastName = "Picard";
console.log(personData);

console.log("Adding age of 79 to personData");
personData.age = 79;
console.log(personData);

let daysInMonth = {January : 31, February : 28, March : 31, April : 30, May : 31, June : 30, July : 31, August : 31,
September : 30, October : 31, November : 30, December : 31};

for (let month in daysInMonth)
{
    console.log(month + " has " + daysInMonth[month] + " days in it.");
}