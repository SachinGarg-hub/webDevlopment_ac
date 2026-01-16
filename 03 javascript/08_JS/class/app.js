// ===============================
// DOM SELECTION
// ===============================

// Select elements
const mainImg = document.getElementById("mainImg");
const heading = document.querySelector("h1");
const boxLinks = document.querySelectorAll(".boxLink");
const description = document.getElementById("description");
const oldImages = document.querySelectorAll(".oldImg");

// ===============================
// DOM MANIPULATION
// ===============================

// Change heading text and style
heading.textContent = "🕷️ Spider-Man (Friendly Neighborhood Hero)";
heading.style.color = "crimson";

// Change main image attributes
mainImg.alt = "Spider-Man Image";

// Update description paragraph
description.style.border = "2px solid brown";
description.style.padding = "10px";

// Change all box links
boxLinks.forEach((link) => {
    link.style.color = "darkblue";
    link.style.fontWeight = "bold";
});

// ===============================
// EVENTS
// ===============================

// Click event on main image
mainImg.addEventListener("click", () => {
    alert("With great power comes great responsibility!");
});

// Hover effect on old images
oldImages.forEach((img) => {
    img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "0.3s";
    });

    img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
    });
});

// ===============================
// DYNAMIC ELEMENT CREATION
// ===============================

// Create a new button
const btn = document.createElement("button");
btn.textContent = "Change Theme";
btn.style.marginTop = "20px";

// Add button to body
document.body.appendChild(btn);

// Button click event
let darkMode = false;

btn.addEventListener("click", () => {
    if (!darkMode) {
        document.body.style.backgroundColor = "#121212";
        document.body.style.color = "white";
        btn.textContent = "Light Theme";
        darkMode = true;
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.textContent = "Dark Theme";
        darkMode = false;
    }
});
