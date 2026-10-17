const prompt = require('prompt-sync')();
// Write a function named isEven that takes one number as input and returns true if the number is even, otherwise returns false.
// Test the function with the numbers 24 and 17.
function isEven(){
    n=Number(prompt("enter a number"));
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven());
console.log(isEven());
