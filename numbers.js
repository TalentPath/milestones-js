let num1 = 2, num2 = 3;

//function to run certain operations and give a descriptive output to the console
let operation = (num1, num2, sign) => {
    console.log(`Number one is: ${num1} | Number two is: ${num2}`)
    switch (sign){
        case '+':
            console.log(`The sum of Number one and Number two is: ${num1+num2}`);
            break;
        case '-':
            console.log(`The difference of Number one and Number two is: ${num1-num2}`);
            break;
        case '*':
            console.log(`Number one multiplied by Number two is: ${num1*num2}`);
            break;
        case '/':
            console.log(`Number one divided by Number two is: ${num1/num2}`);
            break;
        case '%':
            console.log(`Number one modulo Number two is: ${num1%num2}`);
            break;
        case '**':
            console.log(`Number one to the power of Number two is: ${num1**num2}`);
            break;
        case 'floor':
            console.log(`Number one divided by Number two (rounded down to nearest integer) is: ${Math.floor(num1/num2)}`);
            break;
        cdefault:
            console.log(`I don't know that sign`);
            break;
    }
}

operation(num1,num2,'+')
operation(num1,num2,'-')
operation(num1,num2,'*')
operation(num1,num2,'/')
operation(num1,num2,'%')
operation(num1,num2,'**')
operation(num1,num2,'floor')

let blah = 652312141228756;
console.log(`blah is: ${blah} and the right-most digit can be obtained by running %10 operation on it.`);
operation(blah,10,'%');

if(blah % 2 === 0){
    console.log(`Blah is even because blah % 2 is zero.`)
} else {
    console.log(`Blah is odd because blah % 2 is not zero.`)
}

operation(blah,1,'+');
operation(blah,2,'+');
operation(blah,10,'+');
let k = 111;
console.log(`The variable k (aka Number two) is ${k}.`)
operation(blah,k,'+');