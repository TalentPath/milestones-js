let coolArray = [1, 2, 3, 4, 5];

console.log("'coolArray' has", coolArray.length, "elements");
console.log("The first element of 'coolArray' is =", coolArray[0]);
console.log("The second element of 'coolArray' is =", coolArray[1]);
console.log("The last element of 'coolArray' is =", coolArray.slice(-1)[0]);
console.log();

let k = 3;
console.log("'k' =", k);
console.log("The element at index k is =", coolArray[k]);
console.log();

console.log("The first, second, last, and 'k'th element have been made negative in 'coolArray");
coolArray[0] = -1;
coolArray[1] = -2;
coolArray[4] = -5;
coolArray[k] = coolArray[k]*-1;

console.log("The first element of 'coolArray' is now =", coolArray[0]);
console.log("The second element of 'coolArray' is now =", coolArray[1]);
console.log("The last element of 'coolArray' is now =", coolArray.slice(-1)[0]);
console.log("The element at index k is now =", coolArray[k]);
console.log();

coolArray.push(6);
console.log("The last item of 'coolArray' is now =", coolArray.slice(-1)[0]);
coolArray.pop();
console.log("The last item of 'coolArray' is now =", coolArray.slice(-1)[0]);
coolArray.unshift(0);
console.log("The first item of 'coolArray' is now =", coolArray[0]);
coolArray.shift();
console.log("The first item of 'coolArray' is now =", coolArray[0]);
console.log();
