console.log("hello world!");
let x = 10;
let y = 9;
let sum;
sum = x + y;
console.log(sum);
//Template literals 
let pencilPrice = 10;
let erasorPrice = 5;
//console.log("The total price is :", pencilPrice + erasorPrice, "rupees.");
let output = `the total price is : ${pencilPrice + erasorPrice} Rupees.`;
console.log(output);
//Oerators 
let a = 10;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
console.log(a ** b);
console.log(a++); //10
console.log(++a); //12
// Comparison operator 
let age = 19;
console.log(age > 18);

// if statment 
console.log("before if statement");
if (age >= 18) {
    console.log("yes, you can vote ");
}
console.log("after if statement");
// pq. create a traffic light system that shows what to do based on color 

let color = "red";
if (color === "red") {
    console.log("Stop");
}
if (color === "yellow") {
    console.log("slow down");
}
if (color === "green") {
    console.log("Go ");
}
//else if 
let age1 = 14
if (age1 >= 18) {
    console.log("yes , you can vote");
}
else if (age1 < 18) {
    console.log("no, you cant vote ");
}
//PQ
let size = 'XL';
if (size === 'XL') {
    console.log("price is 250 ruppes");
}
else if (size === 'L') {
    console.log("price is 200 ruppes");
}
else if (size === 'M') {
    console.log("price is 100 ruppes");
}
else if (size === 'S') {
    console.log("price is 50 ruppes");
}
//NESTED IF-ELSE 
let marks = 99;
if (marks >= 33) {
    console.log("Pass");
    if (marks >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time ");
}
// logical operators 
let marks1 = 90;
if (marks1 >= 33 && marks1 >= 80) {
    console.log("pass");
    console.log("Grade: O");
}
//pq
//good string  length>3
let str = "apple";
if (str[0] == "a" && str.length > 3) {
    console.log("It is a good string. ");
} else {
    console.log("Its not a good string. ");

}
let num1 = 12;
if ((num1 % 3 === 0) && ((num1 + 1 === 15) || (num1 - 1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}
//pq day 
let day = 1;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("OOPs! , Enter number between 1 to 7");
}