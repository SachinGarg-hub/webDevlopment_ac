//string methods
//1. str.trim()
let msg = " Hello ";
let abc = msg.trim();
console.log(abc);
//let password = prompt("Set your password");
//console.log(password.trim());
//2. touppercase and lowercase
let str = "Random string";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//string methods with argument
//indexOf
let str1 = "ILoveCoding";
console.log(str1.indexOf("Love"));
console.log(str1.indexOf("J"));
console.log(str1.indexOf("o"));
//method chaining 
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);
//Slice methods
console.log(str1.slice(5));
console.log(str1.slice(1, 4));
//str.slice(-num)=str.slice(length-num)
//replace method
console.log(str1.replace("Love", "do"));

//pq 
//1.
let msg1 = "help!";
console.log(msg.trim().toUpperCase());
//2.
let name = "ApnaCollege";
console.log(name.slice(4, 9));   // Colle
console.log(name.indexOf("na")); //2
console.log(name.replace("Apna", "Our")); //OurCollege 
//3
console.log(name.slice(4).replace("l", "t"));