let num1 = 4;
let num2 = 3;

console.log("Using + on numbers will add them. For example: " + num1 + " + "
+ num2 + " = " + (num1 + num2));

console.log("Using - on numbers will subtract them. For example: " + num1
+ " - " + num2 + " = " + (num1 - num2));

console.log("Using * on numbers will multiply them. For example: " + num1
+ " * " + num2 + " = " + (num1 * num2));

console.log("Using / on numbers will divide them. For example: " + num1
+ " / " + num2 + " = " + (num1 / num2));

console.log("Using % on numbers finds the remainder if one number is divided by another." + 
"For example: " + num1 + " % " + num2 + " = " + (num1%num2));

console.log("Using ** is an exponentiator. For example: " + num1 + " to the power of "
+ num2 + " = " + (num1**num2));

console.log("math.floor will round down to the nearest full integer when given a non-integer number."
+ " For example: math.floor of " + num1 + " / " + num2 + " = " + Math.floor(num1/num2));

console.log("If num1 or num2 changed, then the outcomes of these equations would change, provided the code was ran again with these new numbers.")

let blah = 35;

console.log("You can find the right-most digit of a number by using % 10 of that number. For example: " + blah + " % 10 = "
+ (blah % 10));

console.log("You can determine if a number is even or odd by using % 2 of that number. For example,");
if(blah % 2 == 0)
    console.log(blah + "is even!");
else if(blah % 2 == 1)
    console.log(blah + "is odd!");

let k = 44
console.log("You can increment numbers by using +=. For example: ")
console.log(blah + " += 1 = " + (blah += 1));
console.log(blah + " += 2 = " + (blah += 2));
console.log(blah + " += 10 = " + (blah += 10));
console.log(blah + " += k, where k is " + k + " = " + (blah += k));

console.log("Alternatively, you can decrement by using -=. For example:")
console.log(blah + " -= 1 = " + (blah -= 1));
console.log(blah + " -= 2 = " + (blah -= 2));
console.log(blah + " -= 10 = " + (blah -= 10));
console.log(blah + " -= k, where k is " + k + " = " + (blah -= k));

