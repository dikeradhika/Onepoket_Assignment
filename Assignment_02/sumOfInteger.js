
const readlineSync = require('readline-sync')
function sumOfNumber(array){

    let sum = 0

    for(const item of array){

        sum = sum + item;
    }
    return sum ;
}


const input = readlineSync.question('Enter the number array');
const array = input.split(',').map((item) => Number(item.trim()));


const result = sumOfNumber(array)

console.log("Sum of Array ===",result)

