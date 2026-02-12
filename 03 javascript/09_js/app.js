// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick = function () {
//     alert("You clicked the button!");
// }


// function sayHello() {
//     alert("Hello!");
// }
// btn.onclick = sayHello;
// let btns = document.querySelectorAll('button');

// for (btn of btns) {
//     btn.onclick = sayHello;
//     // btn.onmouseenter = function () {
//     //     alert("You entered the button");
//     // }
//     // console.dir(btn);
//     btn.addEventListener("click", function () {
//         alert("You clicked the first button!");
//     }
//     );

// }
// function sayHello() {
//     alert("Hello!");
// }
// addEventListener


// activity js
// Generate a random color

// create a button which changes the bg color of div and then set heading of same color

// let btn = document.querySelector("button");
// let div = document.querySelector("div");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function () {
//     let randomColor = getRandomColor();
//     div.style.backgroundColor = randomColor;
//     h3.innerText = "Color: " + randomColor;
// });

// function getRandomColor() {
//     let r = Math.floor(Math.random() * 255);
//     let g = Math.floor(Math.random() * 255);
//     let b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }
// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//     alert("You clicked the paragraph!");
// });
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function () {
//     console.log("mouse inside a div !");
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });
// let input = document.querySelector("input");
// input.addEventListener("keydown", function (event) {
//     console.log("You pressed ", event.key);
// }
// );


// let form = document.querySelector("form");
// form.addEventListener("submit", function () {
//     event.preventDefault();
//     // let input = document.querySelector("input");
//     // console.log("You submitted the form! ", input.value);

//     let username = document.querySelector("#user").value;
//     let password = document.querySelector("#pass").value;
//     console.log("Username: ", username);
//     console.log("Password: ", password);
//     alert(` your Username : ${username}  and Password: ${password}`);
// });


