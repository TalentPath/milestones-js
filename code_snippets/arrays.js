let coolArray = ['apples', 'oranges', 'pears', 'cherries', 'peaches']

console.log(coolArray);

console.log("CoolArray has " + coolArray.length + " elements.");
console.log("The first element of coolArray is " + coolArray[0]);
console.log("The second element of coolArray is " + coolArray[1]);
console.log("The last element of coolArray is " + coolArray[coolArray.length - 1]);

let k = 3;
console.log("The kth element of coolArray is " + coolArray[k] + ", where k is " + k);

let replacement = coolArray[0];
coolArray[0] = "perfect apples"

console.log("The first element of coolArray was replaced from " + replacement + " to " + coolArray[0])

replacement = coolArray[1];
coolArray[1] = "perfect oranges";
console.log("The second element of coolArray was replaced from " + replacement + " to " + coolArray[1])

replacement = coolArray[coolArray.length - 1];
coolArray[coolArray.length - 1] = "perfect peaches";
console.log("The second element of coolArray was replaced from " + replacement + " to " + coolArray[coolArray.length - 1])

replacement = coolArray[k];
coolArray[k] = "lychee";
console.log("The kth element of coolArray was replaced from " + replacement + " to " + coolArray[k] + ", where k is " + k);

console.log("you can add elements to an array with push. We're going to add lemons to the list.")
coolArray.push("lemons");
console.log(coolArray);
console.log("We can also remove that element with pop. Lemons will now be removed.")
coolArray.pop();
console.log(coolArray);

console.log("You can add to the front of an array with unshift. Adding lemons to the front of the array");
coolArray.unshift('lemons');
console.log(coolArray);
console.log("You can take away the first element with shift. Removing lemons again!");
coolArray.shift();
console.log(coolArray);