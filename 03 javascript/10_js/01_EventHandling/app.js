/* event bubbling */
let div = document.getElementById('parent');
let button = document.getElementById('child');

div.addEventListener('click', function () {
    console.log('DIV');
});
button.addEventListener('click', function () {
    console.log('BUTTON');
});
// on clicking button both BUTTON and DIV will be logged in console due to event bubbling
// but on clicking div only DIV will be logged


/* event delegation */
let container = document.getElementById("container");

container.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn")) {
        console.log("Button clicked:", e.target.innerText);
    }
});
