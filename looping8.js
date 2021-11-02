let coolArray = [1, 2, 3, 4];
console.log("'coolArray' =", coolArray);
console.log();

console.log("Let's print every element in 'coolArray':");
for (let i = 0; i < coolArray.length; i++) {
    console.log(coolArray[i]);
}

console.log("Let's print every other element in 'coolArray':");
for (let i = 0; i < coolArray.length; i=i+2) {
    console.log(coolArray[i]);
}

console.log("Let's print every element in 'coolArray' in reverse order:");
for (let i = coolArray.length-1; i > -1; i--) {
    console.log(coolArray[i]);
}