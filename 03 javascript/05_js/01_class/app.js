//what is function 
function hello() {
    console.log("Hello");
}
hello();
hello();
//pq1 

function printpoem() {
    console.log("Twinkle, twinkle, little star");
    console.log("How I wonder what you are");
}
printpoem();
/*pq2 
create a fnx to roll a dice & always display
the value of the dice(1 to 6).*/
function dice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}
dice();
dice();
dice();
dice();
//argument 
function printname(name) {
    console.log(name);
}
printname("Sachin");
/*q3 
create a function that gives us average of three no. 
*/
function average(num1, num2, num3) {
    let avg = (num1 + num2 + num3) / 3;
    console.log(avg);
}
average(2, 3, 4);
/*q4
create a function thats print the multiplication of a number*/
function table(num) {
    for (let i = 0; i <= 10; i++) {
        console.log(i * num);
    }
}
table(73);
//return keyword
function sum(a, b) {
    return a + b;
}
let s = sum(3, 4);
console.log(s);
console.log(sum(sum(1, 2), 3));

function isAdult(age) {
    if (age >= 18) {
        return "Audlt";
    } else {
        return "not adult";
    }
}
console.log(isAdult(19));

//q5 sum of number 1 to n
let sum1 = 0;
function getSum(n) {
    for (i = 0; i <= n; i++) {
        sum1 = sum1 + i;
    }
    return sum1;

}
console.log(getSum(3));

//q6
let str = ["hi", "hello", "bie", "!"];
function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}
console.log(concat(str));
//lexical scope 
function outerfunc() {
    let x = 5;
    let y = 10;
    function innerfunc() {
        console.log(x);
    }
    innerfunc();
}
console.log(outerfunc());

//q7
let greet = "hello";
function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() { //fnx call hi nhi hua isliye ek hi baar namste aya 
        console.log(greet);
    }
}
console.log(greet); //hello 
changeGreet(); //namaste
//function expression
const SUM = function (a, b) {
    return a + b;
}
console.log(SUM(1, 2));
//high order function 
function multipleGreet(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
let greet1 = function () {
    console.log("Hello");
}
multipleGreet(greet1, 4);
//returns as a function 
function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("wrong request..");
    }
}
let request = "odd";
let func = oddEvenTest(request);
console.log(func(3));
//methodss
const calculator = {

    add: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
}; 