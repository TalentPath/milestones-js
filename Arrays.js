arr = [5,4,3,2,1]
console.log(arr)

console.log('length of array is ' + arr.length)

console.log(arr[0])
console.log(arr[1])
console.log(arr[arr.length-1])

arr[0] = 9
arr[1] = 8
arr[arr.length-1] = 0

console.log(arr)

arr.push(7)
console.log(arr)
arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr)
arr.shift()
console.log(arr)
