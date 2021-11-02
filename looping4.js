let min = 2;
let max = 11;

console.log("'min' =", min);
console.log("'max' =", max);
console.log("Lets print all the even numbers between", min, "and", max, ", inclusive:");

if (min % 2 == 1)
{
    min++;
}

for (let i = min; i < max+1; i=i+2) {
    console.log(i);
}