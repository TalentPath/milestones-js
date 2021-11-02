let input = process.argv[2]
let coolArray = ["chorizo", 113, 112, 'a', "Priyanka"]
switch(input){
    case '1':
        //Print every element of coolArray
        console.log("\n===== Printout of elements in coolArray =====")
        for(let i=0; i<coolArray.length; i++){
            console.log(coolArray[i]);
        }
        //Print every other element of coolArray, starting with the first element
        console.log("\n===== Printout of every other element in coolArray =====")
        for(let i=0; i<coolArray.length; i+=2){
            console.log(coolArray[i]);
        }
        //Print the elements of coolArray in reverse order
        console.log("\n===== Printout of elements in coolArray in reverse order =====")
        for(let i=coolArray.length-1; i>=0; i--){
            console.log(coolArray[i]);
        }
        break;
    case '2':
        break;
    case '3':

        break;
    case '4':

        break;
    case '5':

        break;
    case '6':

        break;
    default:
        console.log("\n=================================\nPlease run this file in the format: node loopingWithArrays#\nReplace # with a number between 1 and 5 (inclusive) to see the output of that question number.\n=================================\n")
}


