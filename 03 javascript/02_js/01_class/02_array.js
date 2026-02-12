//array method 
//1. array.push()
let a = [1, 2, 3, 4];
console.log(a);
a.push(5);
console.log(a);
//2.pop 
a.pop();
console.log(a);
//3. unshift 
a.unshift(0);
console.log(a);
//4.shift 
a.shift();
console.log(a);
//5.indexof 
let primary = ["red", "yellow", "blue"];
primary.indexOf("yellow"); //1
primary.indexOf("green"); //-1
//6. includes 
primary.includes("yellow"); //true 
primary.includes("green"); //false 
// 6. concat
let secondary = ["orange", "white", "green"];
primary.concat(secondary);
//output- (6) ['red', 'yellow' , 'blue', 'orange' ,'white' , 'green']
//7. reverse 
primary.reverse();
//output- ['blue','yellow'.'red']
//8. slice (same as strings)
//9. splice
//10. sort (only for string array)
//pq.. 
let months = ["january", "july", "march", "august"];
//final months=["july","june","march","august"]
//nested array 
let nums = [[2, 4], [5, 6], [8, 20]];


//pq tic tac toe 
let game = [["X", null, "O"], [null, "X", null], ["O", null, "X"]];
console.log(game);