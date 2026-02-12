/*this keyword
const student = {
    name: "Sachin",
    age: 19,
    eng: 95,
    maths: 98,
    physics: 75,
    getAvg() {
        let avg = (this.eng + this.maths + this.physics) / 3;
        console.log(avg);
    }
};
// try and catch statment

console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch {
    console.log("variable a doesn't exist");
}
console.log("hello2");
console.log("hello2");
console.log("hello2");
console.log("hello2");
//Arrow function
let a = 5, b = 10;
const sum = (a, b) => {
    console.log(a + b);
}
//setTimeout fnx
console.log("Hi there!");
setTimeout(() => {
    console.log("Apna college");
}, 4000);
console.log("welcome to");
//set interval fnx
let id = setInterval(() => {
    console.log("Apna college");
}, 2000);
clearInterval(id);

//this with arrow function
//lexical scope
const student1 = {
    name: "aman",
    marks: 95,
    prop: this, //global scope
    getName: function () {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent's scope -> window
        return this.marks;
    },
    getInfo1: function () {
        setTimeout(() => {
            console.log(this)  //student
        }, 2000);
    },
    getInfo2: function () {
        setTimeout(function () {
            console.log(this) //window
        }, 2000);
    },

};
*/

//pq (Write a arrow function that returns the square of a number 'n')
//solution-
const square = (n) => n * n;
console.log(square(3));

//pq (Write a function that prints "Hello World " 5 timeas at interval of 2s each..)
let id = setInterval(() => {
    console.log("Hello World");
}, 2000);
setTimeout(() => {
    clearInterval(id);
}, 10000);
