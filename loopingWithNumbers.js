input = process.argv[2]

switch(input){
    case '1':
        //Print out every integer between 40 and 60 (including both 40 and 60)
        console.log("\n===== Printout of Integers between 40 and 60 =====")
        for(let i=40; i<=60; i++){
            console.log(i);
        }
        break;
        case '2':
            //Print out every even integer between 40 and 60 (including both 40 and 60)
            console.log("\n===== Printout of Even Integers between 40 and 60 =====")
            for(let i=40; i<=60; i++){
                if (i%2 === 0){
                    console.log(i);
                }
            }
            break;
        case '3':
            //Print out every integer between min and max (inclusive)
            let min = 113, max = 133;
            console.log("\n===== Printout of Integers between min and max =====")
            for(let i=min; i<=max; i++){
                console.log(i);
            }
            console.log("\n===== Printout of Even Integers between min and max =====")
            for(let i=min; i<=max; i++){
                if (i%2 === 0){
                    console.log(i);
                }
            }
            break;
        case '4':
            //Print the first 10 multiples of 7        
            console.log("\n===== Printout of First 10 multiples of 7 =====")
            for(let i=1; i<=10; i++){
                    console.log(i*7);
            }
            break;
        case '5':
            //Print the first k multiples of 7, where k is a variable containing a positive integer
            let k = 4;
            console.log("\n===== Printout of First k multiples of 7 =====")
            for(let i=1; i<=k; i++){
                    console.log(i*7);
            }
            break;
        case '6':
            //Print the first k multiples of n, where k is a variable containing a positive integer and n is any number
            let k1 = 4, n = 123;
            console.log("\n===== Printout of First k multiples of n =====")
            for(let i=1; i<=k1; i++){
                    console.log(i*n);
            }
            break;
        default:
            console.log("\n=================================\nPlease run this file in the format: node loopingWithNumbers #\nReplace # with a number between 1 and 6 (inclusive) to see the output of that question number.\n=================================\n")
}


