// Paragraph (red)
let p1 = document.createElement("p");
p1.textContent = "Hey i am red!";
p1.classList.add("red");
document.body.appendChild(p1);

// h3 (blue)
let h3 = document.createElement("h3");
h3.innerText = "Hey i am a blue h3!";
h3.style.color = "blue";
document.body.appendChild(h3);

// div
let div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";
document.body.appendChild(div);

// h1 inside div
let h1Div = document.createElement("h1");
h1Div.textContent = "I am in a div";
div.appendChild(h1Div);

// p inside div
let p2 = document.createElement("p");
p2.textContent = "ME TOO!";
div.appendChild(p2);

// button & input
let btn = document.createElement("button");
let input = document.createElement("input");

btn.textContent = "Click Me!";
btn.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

document.body.appendChild(btn);
document.body.appendChild(input);

// add class to button
let button = document.querySelector("#btn");
button.classList.add("btnStyle");

// heading at top
let heading = document.createElement("h1");
heading.innerHTML = "<u>DOM Practice</u>";
document.body.prepend(heading);

// paragraph with HTML
let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Course";
document.body.appendChild(p);
