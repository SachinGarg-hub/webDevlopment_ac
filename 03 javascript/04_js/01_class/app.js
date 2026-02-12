/*// 1. object literals
let arr = [];
console.log(typeof arr);
// type of arr will be object 
//creating object literals 
const student = {
    name: "sachin",
    age: 20,
    marks: 94.4,
    city: "Chandigarh"
};
console.log(student);
//creating a post 
let post = {
    username: "@sachin_2005",
    content: "this is my first post",
    likes: 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};

console.log(post);
console.log(student["name"]);
console.log(student.name);
//js automatically converts object keys to strings.
const obj = {
    1: "a", // 1 is a number but here it is converted to string 
    2: "b",
    true: "c", //true is a keyword but here it is converted to string
    null: "d"  //null is a keyword but here it is converted to string

};
//add / update value in student 
student.city = "mumbai";
console.log(student.city);
student.genger = "male";
//objects of objects 
const classInfo = {
    aman: {
        grade: "A+",
        city: "delhi"
    },
    abir: {
        grade: "A",
        city: "mumbai"
    },
    amar: {
        grade: "B+",
        city: "delhi"
    }
}
//array of objects 
const classInfo = [
    {
        name: "aman",
        grade: "A+",
        city: "delhi"
    },
    {
        name: "abir",
        grade: "A",
        city: "mumbai"
    },
    {
        name: "amar",
        grade: "B+",
        city: "delhi"
    }
];

*/
//guessing game
const max = prompt("Enter the max number");
console.log(max);
const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the number");
while (true) {
    if (guess == "quit") {
        console.log("user quit");
        break;
    }
    if (guess == random) {
        console.log("you guessed it right");
        alert("you guessed it right..")
        break;
    } else if (guess < random) {
        guess = prompt("Hint: Your guess was too small.please try again");
    }
    else {
        guess = prompt("Hint: Your guess was too large. please try again");
    }
}