// question 2 cerate a button change color \
// Create button
// const btn = document.createElement("button");
// btn.innerText = "Click Me";

// // Add button to body
// document.body.appendChild(btn);

// // Add click event
// btn.addEventListener("click", () => {
//     btn.style.backgroundColor = "green";
//     btn.style.color = "white";
// });
// q3 
const input = document.getElementById("nameInput");
const heading = document.getElementById("nameHeading");

input.addEventListener("input", () => {
    // Allow only letters (a-z, A-Z) and spaces
    const filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");

    // Update input and heading
    input.value = filteredValue;
    heading.innerText = filteredValue;
});
