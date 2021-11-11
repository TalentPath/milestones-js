console.log(`\n${1234} is a number but "${1234+''}" is a string.`)
console.log(`\n"${'1234'}" is a string but ${parseInt('1234')} is a number.`)

let str = "apples";
//got split() syntax from: https://www.samanthaming.com/tidbits/83-4-ways-to-convert-string-to-character-array/
const strToArr = str.split('');
console.log("\nHere's what you get when you split apples:")
console.log(strToArr)

const arr = ['one', '--two--', 'three'];
let concatArr = '';
arr.forEach(str => {
    concatArr += str;
});
console.log(`\nThe concatinated string is: "${concatArr}"`)

const arr2 = ['one', 'two', 'three'];
//looked up join here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
console.log(`\nThe concatinated string with dividers is: "${arr2.join("|")}"`)