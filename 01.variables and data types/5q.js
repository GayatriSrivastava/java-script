// object
let student = {
  name: "YourName",
  age: 17,
  isEnrolled: true
};
console.log(student);
console.log(student.name);
console.log(student.age);
// array
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];
console.log(numbers[0]);
console.log(numbers[numbers.length-1]);
console.log(mixed);

// function
function greet(name){
    return "hello, "+ name + "!";
}
let message1= greet("gayatri")
let message2=greet("govind")
console.log(message1);
console.log(message2);