let num1 = 3;
let num2 = 10;

console.log("The sum of num1 and num2 is: ", num1 + num2);
console.log("The difference of num1 and num2 is: ", num1 - num2);
console.log("The multiplication of num1 and num2 is: ", num1 * num2);
console.log("The remainder of num1 / num2 is: ", num1 % num2);
console.log("The exponentiation of num1 ^ num2 is: ", num1 ** num2);
console.log("The largest number less than or equal to num1 / num2 is: ", Math.floor(num1 / num2));

console.log("Because variables are being used for num1 and num2, the results will change accorrdingly if the values change.");

let blah = 5132;

let rightMostDigit = Math.abs(blah) % 10; // Right most digit is found by formula |x| % 10

console.log("The value of blah is : ", blah);

console.log("The value of the right most digit is: ", rightMostDigit);

let evenOrOddString = rightMostDigit % 2 == 0 ? "even" : "odd"; // x % 2 == 0 is even, elsewise it is odd.

console.log("The right most digit is an " + evenOrOddString + " number");

blah++; // Blah incremented by 1

console.log("Incrementing blah by 1, Blah: ", blah);

blah+=2;

console.log("Incrementing blah by 2, Blah: ", blah);

blah+=10;

console.log("Incrementing blah by 10, Blah: ", blah);

let k = 15;

console.log("The value K is equal to: ", k);

blah+=k;

console.log("Incrementing blah by K(" + k + "), Blah: ", blah);

blah--;

console.log("Decrementing blah by 1, Blah: ", blah);

blah-=2;

console.log("Decrementing blah by 2, Blah: ", blah);

blah-=10;

console.log("Decrementing blah by 10, Blah: ", blah);

blah-=k;

console.log("Decrementing blah by k(" + k + "), Blah: ", blah);

