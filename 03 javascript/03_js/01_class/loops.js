/* 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// odd no. 1 to 15
for (let i = 1; i <= 15; i = i + 2) {
    console.log(i);
}

// even no. 2 to 15
for (let i = 2; i <= 15; i = i + 2) {
    console.log(i);
}

// table of n
let n = parseInt(prompt("write your number"));
for (let i = n; i <= n * 10; i = i + n) {
    console.log(i);
}

// nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}
//while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
favorite movie  //using break 
const favMovie = "3idiots";
let guess = prompt("Guess fav movie ");
while ((guess != favMovie)) {
    if ((guess -= "quit")) {
        console.log("you quit");
        break;
    }
    guess = prompt("wrong guess try again ");
}
if (guess == favMovie) {
    console.log("congratulations, you guessed right movie");
}
    */
//loops with arrays 
let fruits = ["mango", "apple", "banana", "litchi", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}
// for of loop 
for (fruit of fruits) {
    console.log(fruit);
}