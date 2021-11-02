let coolArray = ["first",123,'w',"last...for now","element"];
let k =100;

console.log(`The length of coolArray is: ${coolArray.length}`)
console.log(`The first element of coolArray is: ${coolArray[0]}`)
console.log(`The second element of coolArray is: ${coolArray[1]}`)
console.log(`The last element of coolArray is: ${coolArray[coolArray.length-1]}`)
console.log(`The element at k position in coolArray is: ${coolArray[k]}`);

console.log(`The first element of coolArray is now: ${coolArray[0]=4}`)
console.log(`The second element of coolArray is now: ${coolArray[0]="second"}`)
console.log(`The last element of coolArray is now: ${coolArray[coolArray.length-1]="omega"}`)
console.log(`The k-th element of coolArray is now: ${coolArray[k]="hello"}`)
coolArray.push("I'm new here!")
console.log(`The new element of coolArray is now: ${coolArray[coolArray.length-1]}`)
coolArray.pop()
console.log(`The last element of coolArray is gone, thanks to coolArray.pop()`)
//looked up unshift on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
coolArray.unshift("Hot Stuff")
console.log(`The first element of coolArray is now: "${coolArray[0]}" thanks to coolArray.unshift()`)
//looked up shift on: https://www.w3schools.com/jsref/jsref_shift.asp
coolArray.shift()
console.log(`The first element of coolArray is now: "${coolArray[0]}" thanks to coolArray.shift()`)
console.log(coolArray)