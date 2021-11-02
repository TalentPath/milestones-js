console.log("we're first going to loop from 40 through 60");
for(let i = 40; i <= 60; i++)
    console.log(i);

console.log("Next we're going to loop from 40 through 60 and only print even numbers");
for(let i = 40; i <= 60; i+= 2)
    console.log(i);

let min = 15, max = 21
console.log("The minimum number is " + min + " and the maximum number is " + max + ", we're" +
" going to print every number in between these two numbers, not including the min and max themselves");
for(let i = min + 1; i < max; i++)
    console.log(i);
console.log("Next we'll do the same thing but including the min and max");
for(let i = min; i <= max; i++)
{
    console.log(i);
}

console.log("Next we'll print out the first 10 multiples of 7 by simply iterating the factor of the multiplication each loop")
for(let i = 1; i <= 10; i++)
{
    console.log(7 * i);
}

let k = 4;
let n = -3;
console.log("Finally we'll find the first k multiples of 7, where k is " + k +", and then we'll" +
" find the first k multiples of n, where n is " + n);
for(let i = 0; i <= k; i++)
{
    console.log(7 * i);
}
console.log("Now for n");
for(let i = 0; i <=k; i++)
{
    console.log(n * i);
}