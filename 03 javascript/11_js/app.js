// ==============================
// JS CALL STACK
// ==============================

// function first() {
//     console.log("First function called");
//     second();
//     console.log("First function ended");
// }

// function second() {
//     console.log("Second function called");
//     third();
//     console.log("Second function ended");
// }

// function third() {
//     console.log("Third function called");
//     console.log("Third function ended");
// }

// first();

// output will be:
// First function called
// Second function called
// Third function called
// Third function ended
// Second function ended
// First function ended
// this is how js call stack works, it follows LIFO (last in first out) method



// ==============================
// ASYNCHRONOUS JAVASCRIPT
// ==============================

// console.log("Start");

// setTimeout(() => {
//     console.log("This is from setTimeout");
// }, 2000);

// console.log("End");

// output will be:
// Start
// End
// This is from setTimeout
// even though setTimeout is called in between start and end,
// it gets executed after 2 seconds, demonstrating asynchronous behavior of js



// ==============================
// EVENT LOOP (LONG RUNNING TASK)
// ==============================

// function longRunningTask() {
//     let sum = 0;
//     for (let i = 0; i < 1e9; i++) {
//         sum += i;
//     }
//     return sum;
// }

// console.log("Before long running task");

// setTimeout(() => {
//     console.log("Long running task result:", longRunningTask());
// }, 0);

// console.log("After long running task");

// output will be:
// Before long running task
// After long running task
// Long running task result: 499999999500000000
// even though setTimeout is set to 0 ms,
// it gets executed after the long running task is completed,
// demonstrating event loop mechanism in js



// ==============================
// PROMISES
// ==============================

// function asyncTask(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve("Task completed successfully!");
//             } else {
//                 reject("Task failed!");
//             }
//         }, 2000);
//     });
// }

// asyncTask(true)
//     .then((message) => {
//         console.log("Success:", message);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("Async task finished.");
//     });

// output will be after 2 seconds:
// Success: Task completed successfully!
// Async task finished.
// if asyncTask(false) is called, output will be:
// Error: Task failed!
// Async task finished.



// ==============================
// ASYNC / AWAIT
// ==============================

// async function runAsyncTask() {
//     try {
//         let message = await asyncTask(true);
//         console.log("Success:", message);
//     } catch (error) {
//         console.log("Error:", error);
//     } finally {
//         console.log("Async task finished.");
//     }
// }

// runAsyncTask();

// output will be after 2 seconds:
// Success: Task completed successfully!
// Async task finished.



// ==============================
// FETCH API (CAT FACT)
// ==============================

// let btn = document.getElementById("getFactBtn");
// let p = document.getElementById("catFact");

// btn.addEventListener("click", function () {
//     fetchDataAndDisplay();
// });

// async function fetchDataAndDisplay() {
//     let url = "https://catfact.ninja/fact";

//     try {
//         let response = await fetch(url);
//         let data = await response.json();
//         p.innerText = data.fact;
//     } catch (error) {
//         p.innerText = "Error fetching data";
//         console.log("Error occurred:", error);
//     }
// }



// ==============================
// FETCH API USING THEN / CATCH
// ==============================

// let url = "https://catfact.ninja/fact";

// fetch(url)
//     .then((response) => {
//         console.log("Response received:", response);
//         return response.json();
//     })
//     .then((data) => {
//         console.log("Data received:", data);
//     })
//     .catch((error) => {
//         console.log("Error occurred:", error);
//     });

// output will be:
// Response received: Response { ... }
// Error occurred: TypeError: Failed to fetch



// ==============================
// FETCH WITH ASYNC / AWAIT
// ==============================

// async function fetchData() {
//     try {
//         let response = await fetch(url);
//         console.log("Response received:", response);
//     } catch (error) {
//         console.log("Error occurred:", error);
//     }
// }

// fetchData();



// ==============================
// AXIOS
// ==============================

// axios.get(url)
//     .then((response) => {
//         console.log("Data received using axios:", response.data);
//     })
//     .catch((error) => {
//         console.log("Error occurred using axios:", error);
//     });



// ==============================
// DOG PICTURES API
// ==============================

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.getElementById("getDogPicBtn");
let img = document.getElementById("dogPic");
btn2.addEventListener("click", function () {
    fetchDogPicture();
}
);

async function fetchDogPicture() {
    try {
        let response = await fetch(url2);
        let data = await response.json();
        console.log("Random dog picture URL:", data.message);
        img.src = data.message;

    } catch (error) {
        console.log("Error occurred while fetching dog picture:", error);
    }
}

fetchDogPicture();
